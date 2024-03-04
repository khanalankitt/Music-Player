"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Player(props) {
  const [playPause, setPlayPause] = useState("/play.png");
  const [mute, setMute] = useState("/volume.png");
  const [audio, setAudio] = useState(null);

  let naya;
  useEffect(() => {
    if (audio) {
      audio.pause();
      setPlayPause("/play.png");
    }
    if (props.songLink) {
      naya = new Audio(props.songLink);
      setAudio(naya);
      setMute("/volume.png");
    } else {
      alert("Song preview not available");
    }
  }, [props.songLink]);

  const changeMute = () => {
    if (audio) {
      if (audio.muted) {
        audio.muted = false;
        setMute("/volume.png");
      } else {
        audio.muted = true;
        setMute("/mute.png");
      }
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
          style={{ objectFit: "cover",borderRadius:"10px", }}
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
            <button
              className="play"
              onClick={changePlayPause}
            >
              Song Preview
              <Image src={playPause} height={20} width={20} alt="icon" />
            </button>
            <button
              className="volume"
              onClick={changeMute}
              style={{ position: "absolute", marginLeft: "330px" }}
            >
              <Image src={mute} height={18} width={18} alt="icon" />
            </button>
          </div>
        </div>
        <br />
        <a
          href={props.externallink}
          target="_blank"
          style={{
            textDecorationLine: "none",
            margin: "0px",
            height: "30px",
          }}
        >
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              gap: "10px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "10px",
              border: "none",
              padding: "5px",
              background: "lightgreen",
              fontWeight: "bold",
            }}
          >
            Listen in spotify
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/768px-Spotify.png"
              height={30}
              width={30}
              alt="imag"
            />
          </button>
        </a>
      </div>
    </>
  );
}
