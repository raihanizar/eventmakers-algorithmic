"use client";

export const SearchEvents = ({
  searchQuery,
  setSearchQuery,
  handleSearchData,
  handleReset,
}) => {
  return (
    <div className="flex flex-row gap-x-2 items-center ">
      <p>Search Event: </p>
      <input
        className="input input-primary"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="space-x-2">
        <button className="btn btn-active w-20" onClick={handleSearchData}>
          cari
        </button>
        <button className="btn btn-active w-20" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};
