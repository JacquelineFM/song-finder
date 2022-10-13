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
