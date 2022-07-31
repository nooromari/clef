import React, { useState } from "react";
import Header from "./components/header";
import SongCard from "./components/songCard";
import { generalGet, getData } from "./utils/services";
import { API_KEY } from "./utils/constants";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getDataFromSearch = () => {
    if (searchString) {
      getData(searchString)
        .then((res) => {
          if (res.success) {
            setSongs(res.result);
            generalGet(`${res.result[0].api_track}?apikey=${API_KEY}`).then((res) => console.log(res,'track'));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-blue-300 flex flex-col min-h-screen ">
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center m-3">
          <h1 className="text-3xl font-bold text-center">Music Search</h1>
          <div className=" w-full flex justify-center gap-5 m-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="search"
              name="search"
              placeholder="Search for a song"
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="button" onClick={getDataFromSearch} className="bg-black text-white px-2 rounded-md">
              Search
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-6 flex-wrap items-center justify-center">
            {songs ? (
              songs.map(({ id_track, ...song }: any) => (
                <SongCard key={id_track} {...song} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </main>
      {/* <footer className="justify-self-end text-center text-white p-2">
        <p>All rights received &copy;2022 Clef</p>
      </footer> */}
    </div>
  );
}

export default App;
