"use client";
import { useState } from "react";
import Image from "next/image";
export default function Player() {
  const [playPause, setPlayPause] = useState("/play.png");
  const [mute, setMute] = useState("/volume.png");
  const changePlayPause = () => {
    if (playPause == "/play.png") {
      setPlayPause("/pause.png");
    } else {
      setPlayPause("/play.png");
    }
  };
  const changeMute = () => {
    if (mute == "/mute.png") {
      setMute("/volume.png");
    } else {
      setMute("/mute.png");
    }
  };
  return (
    <>
      <div className="player">
        <Image src="/im.png" height={200} width={250} />
        <div className="details">
          <p className="name">Name</p>
          <p className="artist">Artist</p>
        </div>
        <div className="controls">
          <div className="buttons">
            <button>
              <Image src="/previous.png" height={20} width={20} />
            </button>
            <button className="play" onClick={changePlayPause} style={{height:"50px",width:"50px"}}>
              <Image src={playPause} height={25} width={25} />
            </button>
            <button>
              <Image src="/next.png" height={20} width={20} />
            </button>
          </div>
          <div className="bar">
            <input type="range" className="range" style={{width:"300px"}}/>
            <button className="volume" onClick={changeMute}>
              <Image src={mute} height={20} width={20} />
            </button>
          </div>
          <p>
            <span className="span-left">0:00</span>
            <span className="span-left">-0:00</span>
          </p>
        </div>
      </div>
    </>
  );
}
