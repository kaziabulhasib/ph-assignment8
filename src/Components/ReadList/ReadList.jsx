import { Link } from "react-router-dom";

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
                  <p>by: {bk.author}</p>
                  <div className='flex gap-8'>
                    <div className='flex gap-3'>
                      {" "}
                      <span>Tag: </span>
                      {bk.tags.map((tag, index) => (
                        <p className='text-[#23BE0A]' key={index}>
                          #{tag}
                        </p>
                      ))}
                    </div>
                    <p className='flex'>
                      Year of Publishing: {bk.yearOfPublishing}
                    </p>
                  </div>
                  <div className='flex gap-4 border-b'>
                    <h4 className='flex'>Publisher: {bk.publisher}</h4>
                    <h4 className='flex'>Page: {bk.totalPages}</h4>
                  </div>
                  <div className='flex gap-5'>
                    <h1 className='py-2 px-5 bg-green-200 text-black rounded-[30px]'>
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
