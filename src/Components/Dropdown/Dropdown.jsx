const Dropdown = () => {
  const selectStyle = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    padding: "12px 16px",
  };
  const sortBook = (e) => {
    console.log(e.target.value);
  };
  const optionStyle = {
    backgroundColor: "white",
    color: "black",

    padding: "6px 10px",
    textAlign: "center",
  };
  return (
    <div>
      <select id='sort' name='sort' style={selectStyle} onChange={sortBook}>
        <option value='default' style={optionStyle}>
          Sort by
        </option>
        <option value='rating' style={optionStyle}>
          Rating
        </option>
        <option value='numberOfPages' style={optionStyle}>
          Number of Pages
        </option>
        <option value='publishedYear' style={optionStyle}>
          Published Year
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
