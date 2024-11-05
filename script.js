/*
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readBook = readBook;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readBook}`;
  };
}

function AddBookToLibrary() {}

const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  100,
  "finished reading"
);

console.log(atomicHabits.info());

const blended = new Book(
  "Blended",
  "Sharon M. Draper",
  320,
  "reading it, on chapter 4."
);

console.log(blended.info());
*/

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readBook}`;
  };
}

// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readBook}`;
// };

const myLibrary = [
  new Book("Atomic Habits", "James Clear", 100, "finished reading"),
  new Book("Blended", "Sharon M. Draper", 320, "currently reading"),
];

for (let i = 0; i < myLibrary.length; i++) {
  console.log(myLibrary[i].info());
}
