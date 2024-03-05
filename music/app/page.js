import Sidebar from "@/components/sidebar/sidebar";
import topTracks from "@/components/server";
export default function Home() {
  return (
    <>
      <div className="container">
        <Sidebar topTracksProp={topTracks}/>
      </div>
    </>
  );
}