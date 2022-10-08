import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({ artist: "", song: "" });

  return (
    <form className="w-full mx-auto space-y-10">
      <div className="space-y-6">
        <div className="flex flex-col justify-between space-y-3">
          <label htmlFor="artist" className="text-gray-700 font-bold uppercase">
            Artist
          </label>
          <input
            id="artist"
            type="text"
            name="artist"
            className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            placeholder="Camila Cabello"
            value={search.artist}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col justify-between space-y-3">
          <label htmlFor="song" className="text-gray-700 font-bold uppercase">
            Song
          </label>
          <input
            id="song"
            type="text"
            name="song"
            className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            placeholder="Celia"
            value={search.song}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
      </div>
      <input
        type="submit"
        value="Search"
        className="py-2 px-4 bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-400 focus:ring-offset-emerald-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
      />
    </form>
  );
};

export default Form;
