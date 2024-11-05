function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const myLibrary = [];

const modalElement = document.querySelector(".modal");
const form = document.getElementById("form");

document.querySelector(".new-book-button").addEventListener("click", () => {
  modalElement.style.display = "block";
});

form.addEventListener("submit", () => {
  const formData = new FormData(form);

  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const status = formData.get("status");

  const myLibrary = [new Book(title, author, pages, status)];

  DisplayBooks();
});

document.querySelector(".js-close-icon").addEventListener("click", () => {
  modalElement.style.display = "none";
});

function DisplayBooks() {
  console.log("worked");
  const bookDisplayContainer = document.querySelector(
    ".book-display-container"
  );
  bookDisplayContainer.innerHTML += "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookInfoContainer = document.createElement("div");
    bookInfoContainer.classList.add("book-info-container");

    const bookHeader = document.createElement("div");
    bookHeader.classList.add("book-header");

    const bookName = document.createElement("p");
    bookName.classList.add("book-name");
    bookName.textContent = myLibrary[i].title;

    const authorName = document.createElement("p");
    authorName.classList.add("author-name");
    authorName.textContent = `By ${myLibrary[i].author}`;

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages");
    pagesDiv.textContent = `Total pages: ${myLibrary[i].pages}`;

    const statusDiv = document.createElement("div");
    statusDiv.classList.add("status");
    statusDiv.textContent = `Status: ${myLibrary[i].status}`;

    bookHeader.appendChild(bookName);
    bookHeader.appendChild(authorName);

    bookInfoContainer.appendChild(bookHeader);
    bookInfoContainer.appendChild(pagesDiv);
    bookInfoContainer.appendChild(statusDiv);

    bookDisplayContainer.appendChild(bookInfoContainer);
  }
}
