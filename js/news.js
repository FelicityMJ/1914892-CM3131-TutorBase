const apiKey = "b9da0819b22f43bd82596f2ea3daaa18";
const url = `https://newsapi.org/v2/everything?q=exam%20preparation%20tips&sortBy=publishedAt&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    const newsDiv = document.getElementById("news");

    let currentArticle = 0;
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showCurrentArticle() {
      const articleDivs = document.querySelectorAll(".news-item");
      articleDivs.forEach((articleDiv, index) => {
        if (index === currentArticle) {
          articleDiv.classList.add("active");
        } else {
          articleDiv.classList.remove("active");
        }
      });

      prevButton.disabled = currentArticle === 0;
      nextButton.disabled = currentArticle === articles.length - 1;
    }

    prevButton.addEventListener("click", () => {
      currentArticle--;
      showCurrentArticle();
    });

    nextButton.addEventListener("click", () => {
      currentArticle++;
      showCurrentArticle();
    });

    articles.forEach((article, index) => {
      const articleDiv = document.createElement("ion-item");
      articleDiv.classList.add("news-item");
      if (index === 0) {
        articleDiv.classList.add("active");
      }

      const card = document.createElement("ion-card");
      articleDiv.appendChild(card);

      const titleLink = document.createElement("a");
      titleLink.href = article.url;
      titleLink.textContent = article.title;
      titleLink.target = "_blank";
      const titleDiv = document.createElement("ion-card-title");
      titleDiv.classList.add("news-title");
      titleDiv.appendChild(titleLink);
      card.appendChild(titleDiv);

      const descriptionDiv = document.createElement("ion-card-content");
      descriptionDiv.classList.add("news-description");
      const description = document.createElement("p");
      description.textContent = article.description;
      descriptionDiv.appendChild(description);
      card.appendChild(descriptionDiv);

      const authorDiv = document.createElement("ion-card-content");
      authorDiv.classList.add("news-author");
      const author = document.createElement("p");
      author.textContent = `By ${article.author}`;
      authorDiv.appendChild(author);
      card.appendChild(authorDiv);

      const publishedAtDiv = document.createElement("ion-card-content");
      publishedAtDiv.classList.add("news-published-at");
      const publishedAt = document.createElement("p");
      publishedAt.textContent = new Date(article.publishedAt).toLocaleString();
      publishedAtDiv.appendChild(publishedAt);
      card.appendChild(publishedAtDiv);

      newsDiv.appendChild(articleDiv);
    });

    showCurrentArticle();
  })
  .catch(error => console.log(error));
