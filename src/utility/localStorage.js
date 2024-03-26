export const saveReadBookToLocalStorage = (book, toast) => {
  const readBook = JSON.parse(localStorage.getItem("read-book")) || [];
  const isExists = readBook.find((item) => item.bookId == book.bookId);
  if (isExists) {
    toast.error("You have already read this book.");
  } else {
    readBook.push(book);
    localStorage.setItem("read-book", JSON.stringify(readBook));
    toast.success("Book added to read list.");
  }
};
