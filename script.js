// This constructor creates a new book object with instances of title, author, pages, and status
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Declaring variables
let myLibrary = [];
const modalElement = document.querySelector(".modal");
const form = document.getElementById("form");
const newBookButton = document.querySelector(".new-book-button");

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

form.addEventListener("submit", () => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").value;

  // myLibrary = [new Book(title, author, pages, status)];
  myLibrary.push(new Book(title, author, pages, status));

  CloseModal();
  DisplayBooks();
});

function DisplayBooks() {
  console.log("worked");
  // Gets the parent container
  const bookDisplayContainer = document.querySelector(
    ".book-display-container"
  );

  bookDisplayContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    // Creates the book info container to store all relevant book information
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

    // First append the book name and author name into the bookHeader
    bookHeader.appendChild(bookName);
    bookHeader.appendChild(authorName);

    // Second append the book header, pagedDiv, and statusDiv into the bookInfoContainer
    bookInfoContainer.appendChild(bookHeader);
    bookInfoContainer.appendChild(pagesDiv);
    bookInfoContainer.appendChild(statusDiv);

    // Lastly append the entire bookInfoContainer into the bookDisplayContainer
    bookDisplayContainer.appendChild(bookInfoContainer);
  }
}
