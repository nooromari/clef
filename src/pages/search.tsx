import React, { useState } from "react";
import SongCard from "../components/songCard";
import { useNavigate } from "react-router-dom";
import apiClient from "../spotify";

function Search() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getDataFromSearch = () => {
    if (searchString) {
      apiClient
        .get(`search?q=${searchString}/&type=track&limit=10&market=US&offset=0`)
        .then((res) => {
          if (res.status === 200) {
            const items = res.data.tracks.items.map(
              ({ album, preview_url }) => {
                return {
                  cover: album.images[0].url,
                  artist: album.artists[0].name,
                  track: album.name,
                  api_track: preview_url,
                  id: album.id,
                };
              }
            );

            setSongs(items);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            window.localStorage.setItem("token", "");
            navigate("/login");
          }
        });
    } else {
      setSongs(null);
    }
  };

  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center m-3">
        <h1 className="text-3xl font-bold text-center">Music Search</h1>
        <div className=" w-full flex justify-center gap-5 m-2">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="search"
            name="search"
            placeholder="Search for a song"
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={getDataFromSearch}
            className="bg-dark-blue text-white px-2 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {songs ? (
            songs.map(({ id, ...song }: any) => <SongCard key={id} {...song} />)
          ) : (
            <div>No result, Search to listen...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
