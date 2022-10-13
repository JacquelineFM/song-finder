import Spinner from "./Spinner";
import useLyrics from "../hooks/useLyrics";

const Lyrics = () => {
  const { lyricsData, loading } = useLyrics();

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div>
        <p className="text-emerald-500 text-sm font-medium uppercase">
          {lyricsData.artist}
        </p>
        <p className="text-gray-700 text-xl font-bold uppercase">
          {lyricsData.song}
        </p>
      </div>
      <br />
      <div className="whitespace-pre-wrap">{lyricsData.lyrics}</div>
    </>
  );
};

export default Lyrics;
