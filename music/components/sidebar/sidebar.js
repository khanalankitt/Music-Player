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

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=20', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(topTracks)
export default function Sidebar(){
    return (
        <>
            <aside className="sidebar">
                <h1>My Spotify Songs</h1>
                {
                    topTracks.map((track)=>{
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
            <Player />
        </>
    );  
}
