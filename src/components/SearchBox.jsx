/* eslint-disable react/prop-types */
const SearchBox = ({
  search,
  setSearch,
  setSort,
  setCategory,
  setBrand,
  setPrice,
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2 h-10">
      <input
        type="text"
        name="search"
        value={search}
        className="grow"
        placeholder="Enter your product name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="badge py-[10px] px-3 bg-lime-400 ">Search</button>
      <button
        onClick={() => {
          setSearch("");
          setSort("");
          setCategory("");
          setBrand("");
          setPrice(0);
        }}
        className="badge py-[10px] px-3 bg-blue-400 "
      >
        Reset
      </button>
    </label>
  );
};

export default SearchBox;
