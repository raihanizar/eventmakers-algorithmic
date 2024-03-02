"use client";

export const SearchEvents = ({
  searchQuery,
  setSearchQuery,
  handleSearchData,
  handleReset,
}) => {
  return (
    <div className="flex flex-row gap-x-2 justify-center items-center">
      <p>Cari acara:</p>
      <input
        className="input input-primary"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="space-x-2">
        <button className="btn btn-active w-20" onClick={handleSearchData}>
          Cari
        </button>
        <button className="btn btn-active w-20" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
