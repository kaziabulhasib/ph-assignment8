import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBookToLocalStorage } from "../../utility/localStorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  // console.log(book);

  // Handle onclick read button

  const handleRead = () => {
    saveReadBookToLocalStorage(book, toast);
  };

  // Handle onclick wishlist button

  const handleWishlist = () => {
    // toast.error("You have already read this book.");
  };

  return (
    <div className='flex justify-between py-14 gap-12 items-center'>
      <div className='p-16 bg-[#1313130D] rounded-2xl flex-1'>
        <img className='w-[425px] h-[565px]' src={book.image} alt='' />
      </div>
      <div className='flex-1'>
        <h1 className='text-5xl'>{book.bookName}</h1>
        <p>by : {book.author}</p>
        <p> {book.category}</p>
        <p>
          {" "}
          <span>Review: </span> {book.review}
        </p>
        <div className='flex gap-4'>
          <h1>Tag:</h1>
          <div className='flex gap-3'>
            {book.tags.map((tag, index) => (
              <p className='text-[#23BE0A]' key={index}>
                #{tag}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className='flex gap-10 mb-3'>
            <h1 className='nav-font text-[#131313B2]'>Number of pages: </h1>
            <h2 className='nav-font font-semibold'>{book.totalPages}</h2>
          </div>
          <div className='flex gap-10 mb-3'>
            <h1 className='nav-font text-[#131313B2]'>Number of pages: </h1>
            <h2 className='nav-font font-semibold'>{book.totalPages}</h2>
          </div>
          <div className='flex gap-10 mb-3'>
            <h1 className='nav-font text-[#131313B2]'>Number of pages: </h1>
            <h2 className='nav-font font-semibold'>{book.totalPages}</h2>
          </div>
          <div className='flex gap-10 mb-3'>
            <h1 className='nav-font text-[#131313B2]'>Number of pages: </h1>
            <h2 className='nav-font font-semibold'>{book.totalPages}</h2>
          </div>
        </div>
        {/* button div  */}
        <div className='flex gap-4'>
          <button
            onClick={handleRead}
            className=' nav-font  px-7 py-4 border text-black font-semibold text-[18px] mr-4 rounded-lg mt-16'>
            Read
          </button>

          <button
            onClick={handleWishlist}
            className=' nav-font  px-7 py-4 bg-[#50B1C9] text-white font-semibold text-[18px] mr-4 rounded-lg mt-16'>
            Wishlist
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
