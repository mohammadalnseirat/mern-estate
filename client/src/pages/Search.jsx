import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* div for left side start here */}
      <div className="p-7 border-b-2 border-b-gray-300 md:border-r-2 md:border-r-gray-200 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <label className="font-semibold text-lg whitespace-nowrap">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="search..."
              className="border border-blue-300 rounded-lg p-3 w-full focus:outline-none"
            />
          </div>
          {/* Add another dives to handle the input */}
          <div className="flex items-center gap-2 flex-wrap">
            <label className="font-semibold text-lg">Type:</label>
            <div className="flex gap-2 ">
              <input type="checkbox" id="all" className="w-5" />
              <span className="font-semibold">Rent&Sale</span>
            </div>
            <div className="flex gap-2 ">
              <input type="checkbox" id="rent" className="w-5" />
              <span className="font-semibold">Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span className="font-semibold">Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span className="font-semibold">Offer</span>
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <label className="font-semibold text-lg">Amenities:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="font-semibold">Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span className="font-semibold">Furnished</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold text-lg">Sort:</label>
            <select
              id="sort_order"
              className="p-2 border border-blue-300 rounded-lg focus:outline-blue-800"
            >
              <option>Price (High To Low)</option>
              <option>Price (Low To High)</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="uppercase bg-slate-900 text-white rounded-lg text-lg p-3 font-semibold hover:rounded-full hover:opacity-95 transition-all ease-in-out duration-200">
            search
          </button>
        </form>
      </div>
      {/* div for left side end here */}

      {/* div for right side start here */}
      <div>
        <h1 className="text-3xl font-semibold border-b border-b-gray-300 p-3 text-slate-600 mt-5">
          Listing Results:
        </h1>
      </div>
      {/* div for right side end here */}
    </div>
  );
};

export default Search;
