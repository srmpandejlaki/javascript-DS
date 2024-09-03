/* menggunakan extentions Prettier sehingga kurung 
kurawal ( {} ) tidak bisa dipisah */
const books = {};

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

function saveBook(book) {
  books[book.id] = book;
}

saveBook({ id: "book-1", name: "Book 1" });
const myBooks = getBooks();
const myBook = getBookById("book-1");

console.log(myBooks);
console.log(myBook);
