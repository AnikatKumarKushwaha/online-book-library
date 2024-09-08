/* eslint-disable react/prop-types */
export default function FilterBooks({
  setSelectedCategory,
  setSearchData,
  categoryList,
  category,
}) {
  function handleFilter(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearch(val) {
    setSearchData(val);
  }

  return (
    <div className=" h-40 flex justify-center items-center gap-2 sm:gap-10">
      {/* Search input to filter books based on title and author*/}
      <div>
        <input
          className="border-2 border-yellow-500 rounded-full px-4 py-2 sm:w-80  outline-yellow-700 text-yellow-800"
          type="text"
          placeholder="Enter the book name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Fliter books based on category*/}
      <div>
        <select
          onChange={handleFilter}
          value={category}
          className="sm:w-40 px-4 py-2 rounded-md border-2 border-yellow-500 outline-yellow-800"
        >
          <option value="all">Sort</option>
          {categoryList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
