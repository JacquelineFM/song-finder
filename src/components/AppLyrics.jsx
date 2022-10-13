import Form from "./Form";
import Alert from "./Alert";
import Info from "./Info";
import Lyrics from "./Lyrics";
import Spinner from "./Spinner";
import useLyrics from "../hooks/useLyrics";

const AppLyrics = () => {
  const { alert, lyricsData, loading } = useLyrics();

  return (
    <div className="w-full">
      <header className="bg-black w-full text-center mx-auto py-10 px-4 sm:px-6 lg:py-14 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block text-white">
            Song lyrics <span className="text-emerald-500">search</span>
          </span>
        </h2>
      </header>
      <div className="grid grid-flow-row md:gap-4 md:grid-cols-3 lg:gap-20 lg:grid-cols-3 lg:mx-24 mx-6">
        <div className="bg-white rounded-lg shadow w-full mx-auto p-8 my-8 lg:my-12 border-t-4 border-emerald-500 h-fit">
          <Form />
        </div>
        <main className="bg-white rounded-lg shadow w-full mx-auto p-8 my-8 md:col-span-2 lg:my-12 lg:col-span-2 border-t-4 border-emerald-500 h-fit">
          {loading ? (
            <Spinner />
          ) : alert ? (
            <Alert>{alert}</Alert>
          ) : !Object.values(lyricsData).includes("") ? (
            <Lyrics />
          ) : (
            <Info />
          )}
        </main>
      </div>
    </div>
  );
};

export default AppLyrics;
