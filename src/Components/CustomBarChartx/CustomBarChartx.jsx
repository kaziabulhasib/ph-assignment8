import { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

const CustomBarChartx = () => {
  const [ReadList, setReadList] = useState([]);

  useEffect(() => {
    const getReadList = JSON.parse(localStorage.getItem("read-book")) || [];
    const dynamicData = getReadList.map((book) => ({
      name: book.bookName,
      page: book.totalPages,
    }));
    setReadList([...ReadList, ...dynamicData]);
  }, []);

  return (
    <div className='my-24  p-16 bg-[#13131308] rounded-3xl'>
      <BarChart
        width={1200}
        height={500}
        data={ReadList}
        margin={{
          top: 20,
          right: 50,
          left: 50,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Bar
          dataKey='page'
          fill='#8884d8'
          shape={<TriangleBar />}
          label={{ position: "top" }}>
          {ReadList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default CustomBarChartx;
