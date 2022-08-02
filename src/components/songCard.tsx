import React from "react";

const SongCard: React.FC<SongCardProps> = ({ cover , artist, api_track, track }) => {
  return (
    <div className="rounded-md bg-dark-blue drop-shadow-md w-64 p-2">
      <div className="">
        <img src={cover} alt={track} className="w-full shadow-md overflow-hidden" />
      </div>
      <div className=" text-white">
        <h3>{track}</h3>
        <p className="text-sky-200 text-sm">{artist}</p>
        <video className="relative" controls>
          <source src={api_track} type="audio/mpeg"/>
        </video>
      </div>
    </div>
  );
};

export default SongCard;
