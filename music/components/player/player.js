"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Player(props) {
  const [playPause, setPlayPause] = useState("/play.png");
  const [mute, setMute] = useState("/volume.png");
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audio) {
      audio.pause();
      setPlayPause("/play.png");
    }
    if (props.songLink) {
      let naya = new Audio(props.songLink)
      setAudio(naya);
    } else {
      alert("Song preview not available");
    }
  }, [props.songLink]);

  const changeMute = () => {
    if (mute == "/mute.png") {
      setMute("/volume.png");
    } else {
      setMute("/mute.png");
    }
  };

  const changePlayPause = () => {
    if (playPause == "/play.png") {
      setPlayPause("/pause.png");
      audio.play();
    } else {
      setPlayPause("/play.png");
      audio.pause();
    }
  };

  return (
    <>
      <div className="player">
        <Image
          src={props.href}
          height={200}
          width={250}
          style={{ objectFit: "cover" }}
          alt="icon"
        />
        <div className="details">
          <p className="name" style={{ fontSize: "20px", fontWeight: "bold" }}>
            {props.name}
          </p>
          <p className="artist" style={{ fontSize: "16px" }}>
            {props.artist}
          </p>
          <p>
            <span className="span-left">{props.duration}</span>
          </p>
        </div>
        <div className="controls">
          <div className="buttons">
            <button >
              <Image 
                src="/previous.png" 
                height={20} 
                width={20} 
                alt="icon" 
              />
            </button>
            <button
              className="play"
              onClick={changePlayPause}
              style={{ height: "50px", width: "50px" }}
            >
              <Image src={playPause} height={25} width={25} alt="icon" />
            </button>
            <button >
              <Image 
                src="/next.png" 
                height={20} 
                width={20} 
                alt="icon" 
              />
            </button>
            <button
              className="volume"
              onClick={changeMute}
              style={{ position: "absolute", marginLeft: "370px" }}
            >
              <Image src={mute} height={20} width={20} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
