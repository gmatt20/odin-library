// This constructor creates a new book object with instances of title, author, pages, and status
function Book(title, author, pages, status, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

// Declaring variables
let myLibrary = [];
const modalElement = document.querySelector(".modal");
const form = document.getElementById("form");
const newBookButton = document.querySelector(".new-book-button");
const deleteBook = document.querySelector(".js-delete-icon");

// Opens modal for form
newBookButton.addEventListener("click", () => {
  modalElement.style.display = "block";
});

// Closes Modal
function CloseModal() {
  modalElement.style.display = "none";
}

// Closes modal
document.querySelector(".js-close-icon").addEventListener("click", CloseModal);

// Deletes a book
function DeleteBook(index) {
  myLibrary.splice(index, 1);
  DisplayBooks();
}

form.addEventListener("submit", () => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").value;
  const uniqueId = Date.now().toString().slice(-3);

  // myLibrary = [new Book(title, author, pages, status)];
  myLibrary.push(new Book(title, author, pages, status, uniqueId));

  form.reset();

  CloseModal();
  DisplayBooks();
});

function DisplayBooks() {
  // Gets the parent container
  const bookDisplayContainer = document.querySelector(
    ".book-display-container"
  );

  bookDisplayContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    // Creates the book info container to store all relevant book information
    const bookInfoContainer = document.createElement("div");
    bookInfoContainer.classList.add("book-info-container");
    bookInfoContainer.style.display = "grid";

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

    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("js-delete-icon", "delete-book");

    const path = document.createElementNS(xmlns, "path");
    path.setAttribute(
      "d",
      "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    );

    // First append the book name and author name into the bookHeader
    bookHeader.appendChild(bookName);
    bookHeader.appendChild(authorName);

    // Second append the book header, pagedDiv, and statusDiv into the bookInfoContainer
    bookInfoContainer.appendChild(bookHeader);
    bookInfoContainer.appendChild(pagesDiv);
    bookInfoContainer.appendChild(statusDiv);
    svg.appendChild(path);
    bookInfoContainer.appendChild(svg);

    // Lastly append the entire bookInfoContainer into the bookDisplayContainer
    bookDisplayContainer.appendChild(bookInfoContainer);
    svg.addEventListener("click", () => {
      DeleteBook(i);
    });
  }
}
