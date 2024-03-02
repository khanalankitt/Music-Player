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

const token = 'BQCP0F5SvOtkMFWz--3TGTz97Ee8sVyQ8HqBWbQjMdD7XUokChbZckI3qOHZCj9CkodMywtlkixcCqvoJ0Xuy1Ay01HrsydJUMCOYFfNsNhLybAEuRkzYLciHqqRYQ7LYeGMEfaqG8ot5E2exDdrMBf55u3CwS93wMcRzr4XWBlh3r_LCdYFshJx-du5QlE5XpVQFP4c9XHZldMW2dl4v3urI-pqHR5-e5vT96tQMWliF8b9iT85pgc_3KEQG5HGtkevGMs7GO4uAPEBOmG1e1VQ';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
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
