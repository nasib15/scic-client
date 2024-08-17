/* eslint-disable react/prop-types */
const SearchBox = ({ setSearch, setSort, setCategory, setBrand, category }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setCategory(category);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2 h-10">
        <input
          type="text"
          name="search"
          className="grow"
          placeholder="Enter your product name"
        />
        <button className="badge py-[10px] px-3 bg-lime-400 " type="submit">
          Search
        </button>
        <button
          onClick={() => {
            setSearch("");
            setSort("");
            setCategory("");
            setBrand("");
          }}
          className="badge py-[10px] px-3 bg-blue-400 "
        >
          Reset
        </button>
      </label>
    </form>
  );
};

export default SearchBox;
