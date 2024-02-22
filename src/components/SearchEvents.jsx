"use client"

export const SearchEvents = ({ searchQuery, setSearchQuery, handleSearchData, handleReset }) => {

  return (
    <div className="flex flex-row gap-x-4 items-center">
      <p>Search Event: </p>
      <input className="rounded" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className="bg-slate-800 text-slate-50 p-2 rounded" onClick={handleSearchData}>search</button>
      <button className="bg-slate-800 text-slate-50 p-2 rounded" onClick={handleReset}>reset</button>
    </div>
  )
}