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
export default topTracks;