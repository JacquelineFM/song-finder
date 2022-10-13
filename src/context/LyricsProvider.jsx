import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const [lyricsData, setLyricsData] = useState({
    artist: "",
    song: "",
    lyrics: "",
  });

  /**
   * The function is called searchLyrics and it takes in a parameter called search. The function is
   * async and it sets the loading state to true. The function then tries to get the artist and song
   * from the search parameter. The function then sets the options variable to an object with a method,
   * url, and headers. The function then uses the axios library to make a request to the url with the
   * options. The function then sets the lyricsData state to an object with the artist, song, and
   * lyrics. The function then sets the alert state to an empty string. The function then sets the
   * loading state to false.
   */
  const searchLyrics = async (search) => {
    setLoading(true);

    try {
      const { artist, song } = search;
      const options = {
        method: "GET",
        url: `https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`,
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      };
      const { data } = await axios(options);

      if (data.lyrics) {
        setLyricsData({ artist, song, lyrics: data.lyrics });
        setAlert("");
      } else {
        setAlert("Song not found!");
      }
    } catch (error) {
      setAlert("Song not found!");
    }

    setLoading(false);
  };

  return (
    <LyricsContext.Provider
      value={{ alert, setAlert, searchLyrics, lyricsData, loading }}
    >
      {children}
    </LyricsContext.Provider>
  );
};

export { LyricsProvider };

export default LyricsContext;
