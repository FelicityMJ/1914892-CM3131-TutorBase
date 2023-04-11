// Set the database name and object store name
const DB_NAME = "favorites-db";
const STORE_NAME = "teachers";

let db;

// Open a connection to the IndexedDB database
const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);

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
      const objectStore = db.createObjectStore(STORE_NAME, { keyPath: "id" });
      console.log("Object store created successfully");
    };
  });
};



const addToFavorites = (teacherName, button) => {
  // Check if the object store exists
  if (!db.objectStoreNames.contains(STORE_NAME)) {
    console.error(`Object store ${STORE_NAME} does not exist`);
    return;
  }

  // Add the teacher to the object store
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  //console.log(`Adding ${teacherName} to favorites`);

  store.getAll().onsuccess = (event) => {
    const teachers = event.target.result;

    //console.log('All teachers in the object store: ', teachers);

    if (teachers.some(teacher => teacher.id === teacherName)) {
     // console.error(`Teacher ${teacherName} already exists in favorites`);
      return;
    }

    store.add({ id: teacherName, name: teacherName });

    // Wait for the transaction to complete
    tx.oncomplete = () => {
      console.log(`${teacherName} added to favorites`);
      displayFavorites();

      // Replace the button with the "Added to favorites" text
      const addedText = document.createElement('span');
      addedText.textContent = 'Added to favorites';
      button.parentNode.replaceChild(addedText, button);
    };

    tx.onerror = () => {
      console.error(`Error adding ${teacherName} to favorites`);
      console.error(tx.error);
    };
  };
};




// Get a reference to the button
const addToFavoritesButton = document.getElementById("button-John-Doe");

// Get a reference to the buttons
const addToFavoritesButtons = document.querySelectorAll(".add-to-favorites");

// Add event listeners to the buttons
addToFavoritesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const teacherName = button.getAttribute("data-teacher-name");
    console.log(`Adding ${teacherName} to favorites`);
    addToFavorites(teacherName, button); // Pass the button as an argument to the addToFavorites function
  });
});

// Remove a teacher from the favorites list
const removeTeacher = (id) => {
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.delete(id);

  tx.oncomplete = () => {
    console.log("Teacher removed from favorites");
    displayFavorites("favorites-list");
  };

  tx.onerror = () => {
    console.error("Error removing teacher from favorites");
  };
};

// Display the favorites list
const displayFavorites = (targetId) => {
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);

  // Clear the list
  const favoritesList = document.getElementById(targetId);
  if (!favoritesList) {
    return;
  }
  favoritesList.innerHTML = "";

  // Get all the teachers from the object store
  store.getAll().onsuccess = (event) => {
    const teachers = event.target.result;

    // Add each teacher to the list
    teachers.forEach((teacher) => {
      const li = document.createElement("li");
      li.textContent = teacher.name;


      // Add a remove button for each teacher
      const button = document.createElement('button');
      button.textContent = 'Remove';
      button.addEventListener('click', () => {
        removeTeacher(teacher.id);
      });
      li.appendChild(button);

      favoritesList.appendChild(li);
    });
  };
};

// Select all remove buttons and change their color to blue
const removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach(button => {
  button.style.color = "blue";
});

// Move all remove buttons to the right of the page
removeButtons.forEach(button => {
  button.style.float = "right";
});


// Initialize the application
openDb().then(() => {
  // Display the favorites on the favorites page
  displayFavorites('favorites-list');

  // Display the favorites on the index page
  displayFavorites('favorites-list-home');
}).catch(() => {
  console.error('Error initializing application');
});



// Add event listeners to the buttons
addToFavoritesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const teacherName = button.getAttribute('data-teacher-name');
    addToFavorites(teacherName);
  });
});