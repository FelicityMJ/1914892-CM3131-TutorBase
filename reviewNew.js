const DB_NAME = "review-comment-db";
const STORE_NAME = "review-comment-store";

let db;

const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = () => {
      console.error("Error opening database");
      reject();
    };

    request.onsuccess = () => {
      db = request.result;
      console.log("Database opened successfully");
      resolve();
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      console.log("Object store created successfully");
    };
  });
};

const addReviewToComment = (reviewName, reviewerName) => {
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);

  const comment = { name: reviewerName, review: reviewName };
  store.add(comment);

  transaction.oncomplete = () => {
    console.log("Review added");
    displayComment();
    location.reload();
  };

  transaction.onerror = () => {
    console.error("Error adding review");
  };
};

const removeReviewFromComment = (commentId) => {
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);

  store.delete(commentId);

  transaction.oncomplete = () => {
    console.log("Review removed");
    displayComment();
  };

  transaction.onerror = () => {
    console.error("Error removing review");
  };
};

const displayComment = () => {
  const transaction = db.transaction(STORE_NAME, "readonly");
  const store = transaction.objectStore(STORE_NAME);

  const commentList = document.getElementById("commentList");
  commentList.innerHTML = "";

  const request = store.openCursor();
  request.onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const comment = cursor.value;
      const ionItem = document.createElement("ion-item");
      const ionNameLabel = document.createElement("ion-label");
      ionNameLabel.textContent = comment.name + ":";
      const ionReviewLabel = document.createElement("ion-label");
      ionReviewLabel.textContent = comment.review;
      ionItem.appendChild(ionNameLabel);
      ionItem.appendChild(ionReviewLabel);

      // Add remove button
      const ionButton = document.createElement("ion-button");
      ionButton.textContent = "Remove";
      ionButton.slot = "end";
      ionButton.addEventListener("click", () => {
        removeReviewFromComment(comment.id);
      });
      ionItem.appendChild(ionButton);

      commentList.appendChild(ionItem);
      cursor.continue();
    }
  };
};

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const reviewName = document.getElementById("reviewName").value;
  const reviewerName = document.getElementById("reviewerName").value;
  if (reviewName && reviewerName) {
    addReviewToComment(reviewName, reviewerName);
  }
});

openDb().then(() => {
  displayComment();
}).catch(() => {
  console.error("Error initializing application");
});

