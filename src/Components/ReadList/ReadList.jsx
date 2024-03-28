import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

import { useEffect, useState } from "react";

const ReadList = () => {
  const [ReadList, setReadList] = useState([]);

  useEffect(() => {
    const getReadList = JSON.parse(localStorage.getItem("read-book")) || [];
    setReadList(getReadList);
  }, []);

  return (
    <div>
      <div>
        {ReadList.map((bk, index) => (
          <div key={index}>
            <div className='hero border rounded-2xl my-6 '>
              <div className='hero-content gap-8 justify-around flex-col lg:flex-row '>
                <div className='bg-[#1313130D] py-7 px-12 rounded-xl'>
                  <img
                    src={bk.image}
                    className='max-w-[130px] max-h-[170px] rounded-lg shadow-2xl'
                  />
                </div>
                <div className='space-y-4'>
                  <h1 className='text-2xl font-bold'>{bk.bookName}</h1>
                  <p className='nav-font font-medium'>by: {bk.author}</p>
                  <div className='flex items-center nav-font gap-8'>
                    <div className='flex items-center nav-font gap-3'>
                      {" "}
                      <span>Tag: </span>
                      {bk.tags.map((tag, index) => (
                        <p
                          className='text-[#23BE0A] py-2 px-4 bg-[#23BE0A0D] text-base font-medium nav-font rounded-3xl'
                          key={index}>
                          #{tag}
                        </p>
                      ))}
                    </div>
                    <p className='flex items-center gap-2'>
                      <IoLocationOutline />
                      Year of Publishing: {bk.yearOfPublishing}
                    </p>
                  </div>
                  <div className='flex gap-6 nav-font border-b pb-7'>
                    <h4 className='flex items-center gap-2'>
                      {" "}
                      <MdPeopleAlt /> Publisher: {bk.publisher}
                    </h4>
                    <h4 className='flex items-center gap-2'>
                      {" "}
                      <MdOutlineContactPage />
                      Page: {bk.totalPages}
                    </h4>
                  </div>
                  <div className='flex gap-5 nav-font'>
                    <h1 className='py-3 px-5 bg-green-200 text-black rounded-3xl'>
                      Category: {bk.category}
                    </h1>
                    <h1 className='py-3 px-5 bg-green-200 text-black rounded-3xl'>
                      rating: {bk.rating}
                    </h1>
                    <Link to={`/book/${bk.bookId}`}>
                      <button className='py-3 px-5 bg-green-500 text-white rounded-3xl font-bold'>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
