/* eslint-disable react/prop-types */
const SearchBox = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="search"
          className="grow"
          placeholder="Enter your product name"
        />
        <button className="badge py-[14px] px-3 bg-lime-400 " type="submit">
          Search
        </button>
        <button
          onClick={() => setSearch("")}
          className="badge py-[14px] px-3 bg-blue-400 "
          type="submit"
        >
          Reset
        </button>
      </label>
    </form>
  );
};

export default SearchBox;
