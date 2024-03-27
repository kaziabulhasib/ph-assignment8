import { useEffect, useState } from "react";

const ReadList = () => {
  const [ReadList, setReadList] = useState([]);

  useEffect(() => {
    const getReadList = JSON.parse(localStorage.getItem("read-book")) || [];
    setReadList(getReadList);
  }, []);
  console.log(ReadList);
  return (
    <div>
      <h1 className='text-5xl text-center'>ReadList</h1>

      <div>
        {ReadList.map((data) => (
          <h1>{data.bookName}</h1>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
