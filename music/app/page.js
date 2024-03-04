import Sidebar from "@/components/sidebar/sidebar";
async function Home() {
  async function fetchWebApi(endpoint, method, body) {
    let token = "BQDaUGZrlZssRdPODeOH99kEybmyl6djUMJ_xPPUF80pNcx56Wcsm1QY33L2YyXEwrhOHfVCV0kpv267Tp_aDb0f0cUW497amq0MbgC0_6yFy8BpzeToWqlYAfRj63eNSvGDCz_p_jVG7ft7-C5ICxZIX0GF7xbGcBx434vQNdj5dVU8U6dpV6TNQyPO-WwZvrWg1clZ_6GWzCQCZtyQXwmjP7N5-fq9x4nvAp9g6_B8VhmDRTw4mxlWoBs7OP6s9UhByavaOT6_HmivpDHM5xH4";
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
  return (
    <>
      <div className="container">
        <Sidebar topTracksProp={topTracks}/>
      </div>
    </>
  );
}

export default Home;