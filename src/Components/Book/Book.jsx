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
        <div className='flex gap-3 my-6'>
          {tags.map((tag, index) => (
            <p className='text-[#23BE0A]' key={index}>
              {tag}
            </p>
          ))}
        </div>

        <div className='card-body'>
          <h2 className='card-title'>{bookName}</h2>
          <p className='nav-font'>by: {author}</p>
        </div>
        <div className='flex justify-between'>
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
