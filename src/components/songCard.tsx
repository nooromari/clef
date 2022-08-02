import React from "react";
import { RiSpotifyLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addSong } from "../store/actionCreators";

const SongCard: React.FC<SongCardProps> = ({
  cover,
  artist,
  api_track,
  track,
  spotifyPlay,
  ...props
}) => {
  // const dispatch = useDispatch;

  return (
    <div className="rounded-md bg-dark-blue drop-shadow-md max-w-64 p-2">
      <div className="">
        <img
          src={cover}
          alt={track}
          className="w-full shadow-md overflow-hidden"
        />
      </div>
      <div className=" text-white">
        <h3>{track}</h3>
        <p className="text-sky-200 text-sm">{artist}</p>
        <div className="flex gap-3 justify-end">
          <a href={spotifyPlay} rel="noreferrer" target="_blank">
            <RiSpotifyLine className="text-sky-200 text-2xl hover:text-white hover:shadow" />
          </a>
          {props?.isFavorite ? (
            <FaHeart className="text-sky-200 text-2xl hover:text-white hover:shadow" />
          ) : (
            <FiHeart
              className="text-sky-200 text-2xl hover:text-white hover:shadow"
              // onClick={() => dispatch(addSong())}
            />
          )}
        </div>
        <video className="relative" controls>
          <source src={api_track} type="audio/mpeg" />
        </video>
      </div>
    </div>
  );
};

export default SongCard;
