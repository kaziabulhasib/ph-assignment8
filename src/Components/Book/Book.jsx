import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    image,
    bookName,
    author,
    bookId,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className='card  bg-base-100 border p-6 '>
        <figure className='bg-[#F3F3F3] w-[320px] h-[230px] rounded-2xl mx-auto'>
          <img className='h-[165px]' src={image} alt='Shoes' />
        </figure>
        <div className='flex gap-3 my-6 '>
          {tags.map((tag, index) => (
            <p
              className='text-[#23BE0A] py-2 px-3 bg-[#23BE0A0D] text-[12px] nav-font rounded-3xl'
              key={index}>
              {tag}
            </p>
          ))}
        </div>

        <div className='card-body text-left -ml-4'>
          <h2 className='card-title text-2xl font-bold'>{bookName}</h2>
          <p className='nav-font font-medium'>by: {author}</p>
        </div>
        <div className='flex justify-between px-4 nav-font'>
          <p>{category}</p>
          <p className='flex gap-2 items-center'>
            {rating} <MdOutlineStarOutline />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
