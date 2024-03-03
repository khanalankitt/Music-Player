"use client"
import Image from "next/image"
import Player from "../player/player";
function calculateDuration(duration){
    let totalSeconds = Math.floor(duration / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0")   
    let time = `${formattedMinutes}:${formattedSeconds}`;
    return time;
}
export function SongItem(props){
    return(
        <>        
            <div className="songContainer">
                <Image src={props.href} alt="song photo" height={50} width={50}/>
                <div className="name">
                    <p>
                        <b>
                            {props.songName}
                        </b>
                    </p>
                    <p>{props.artist}</p>
                <p className="duration">{
                        calculateDuration(props.duration)
                }</p>
                </div>
            </div>
        </>
    );
}

export default function Sidebar({topTracksProp}){
    let topTracks = topTracksProp;
    let tartist =[],tduration = [],tname = [],tpreview = [],thref = [];
    for(let i = 0;i < 20;i++){
        thref[i] = topTracks[i].album.images[0].url;
        tartist[i]=topTracks[i].artists.map((artist)=>artist.name);
        tduration[i] = calculateDuration(topTracks[i].duration_ms);
        tname[i] = topTracks[i].name;
        tpreview[i] = topTracks[i].preview_url;
    }
    return (
        <>
            <aside className="sidebar">
                <h1>My Top Spotify Songs</h1>
                {
                    topTracks.map((track)=>{
                        let i = 6;
                        thref = topTracks[i].album.images[0].url;
                        tartist=topTracks[i].artists.map((artist)=>artist.name);
                        tduration = calculateDuration(topTracks[i].duration_ms);
                        tname = topTracks[i].name;
                        tpreview = topTracks[i].preview_url;
                        return(
                            <SongItem
                                key={track.id}
                                href={track.album.images[0].url}
                                songName={track.name}
                                artist={track.artists.map((artist)=>artist.name)}
                                duration={track.duration_ms}
                            />
                        );
                    })
                }
            </aside>
            <Player 
                href={thref} 
                artist={tartist} 
                duration={tduration} 
                name={tname}
                songLink={tpreview}
            />
        </>
    );  
}
