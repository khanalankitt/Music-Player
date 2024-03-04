import Sidebar from "@/components/sidebar/sidebar";
import topTracks from "@/components/server";
export default async function Home() {
  const fetchedTopTracks = await topTracks; 
  return (
    <>
      <div className="container">
        <Sidebar topTracksProp={fetchedTopTracks}/>
      </div>
    </>
  );
}