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

// I can't understand what is the problem.

export const saveWishListToLocalStorage = (book, toast) => {
  const wishList = JSON.parse(localStorage.getItem("wish-list")) || [];
  const readBook = JSON.parse(localStorage.getItem("read-book")) || [];
  const isReadExists = readBook.find((item) => item.bookId == book.bookId);
  const isExists = wishList.find((item) => item.bookId == book.bookId);
  if (isExists) {
    toast.error("You have already read this book.");
    console.log("esixtsssss");
  } else if (isReadExists) {
    toast.error("You have already read this book.");
    console.log("esixtsssss");
  } else {
    wishList.push(book);
    localStorage.setItem("wish-list", JSON.stringify(wishList));
    toast.success("Book added to read list.");
    console.log("added");
  }
};
