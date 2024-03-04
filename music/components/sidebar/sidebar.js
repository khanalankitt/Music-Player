"use client";
import Image from "next/image";
import Player from "../player/player";
import { useState } from "react";

function calculateDuration(duration) {
  let totalSeconds = Math.floor(duration / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  let time = `${formattedMinutes}:${formattedSeconds}`;

  return time;
}

export default function Sidebar({ topTracksProp }) {
  const [index, setIndex] = useState(0);

  let topTracks = topTracksProp;

  let tartist = [],
    tduration = [],
    tname = [],
    tpreview = [],
    thref = [];

  for (let i = 0; i < 20; i++) {
    thref[i] = topTracks[i].album.images[0].url;
    tartist[i] = topTracks[i].artists.map((artist) => artist.name);
    tduration[i] = calculateDuration(topTracks[i].duration_ms);
    tname[i] = topTracks[i].name;
    tpreview[i] = topTracks[i].preview_url;
  }

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <>
      <aside className="sidebar">
        <h1>My Top Spotify Songs</h1>
        {topTracks != null ? (
          topTracks.map((track, i) => {
            return (
              <div
                className="songContainer"
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
              >
                <Image
                  src={track.album.images[0].url}
                  alt="song photo"
                  height={50}
                  width={50}
                />
                <div className="name">
                  <p>
                    <b>{track.name}</b>
                  </p>
                  <p>{track.artists.map((artist) => artist.name)}</p>
                  <p className="duration">
                    {calculateDuration(track.duration_ms)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Fetch Failed</p>
        )}
      </aside>
      
      <Player
        href={thref[index]}
        artist={tartist[index]}
        duration={tduration[index]}
        name={tname[index]}
        songLink={tpreview[index]}
      />
    </>
  );
}
