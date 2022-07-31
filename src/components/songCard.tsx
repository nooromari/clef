import React from "react";

const SongCard: React.FC<SongCardProps> = ({ cover , artist, api_track, track }) => {
  return (
    <div className="rounded-md bg-black shadow-md w-64 h-100 p-2">
      <div className="">
        <img src={cover} alt={track} className="w-full shadow-md overflow-hidden" />
      </div>
      <div className=" text-white">
        <h3>{track}</h3>
        <p className="text-blue-200 text-sm">{artist}</p>
        <audio className="relative" controls>
          <source src={api_track}/>
        </audio>
      </div>
    </div>
  );
};

export default SongCard;
