import { useState } from "react";
import useLyrics from "../hooks/useLyrics";

const Form = () => {
  const [search, setSearch] = useState({ artist: "", song: "" });
  const { setAlert, searchLyrics } = useLyrics();

  /**
   * If any of the values in the search object are empty, then set the alert to "All fields are
   * required!" and return.
   * @returns The searchLyrics function is being returned.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("All fields are required!");
      return;
    }

    searchLyrics(search);
  };

  return (
    <form className="w-full mx-auto space-y-10" onSubmit={handleSubmit}>
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
            placeholder="The first man"
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
