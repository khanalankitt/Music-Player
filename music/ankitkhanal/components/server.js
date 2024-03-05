async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer BQDJanjBQ8wmgdsLBGf1xnpJWGXfQYH6jXP3XnnORC2ZgUYuS_T2QGqleVb994fJobK5Y6Zx664ysQ5JsgUjipHuiMoiOoXUqqbixWVY21jgC6g-6ZrCnAaYZv9ZnSQQKYTzk7oXaJKYosZSHK-W76GUHePl9zzkLDwBLm8_Pw_qicxOV_e1NQmj4p6XhnwxJSbkse6YAqSoPF_BhQJT9EhXdixGR-GkXWxgXT7hV868YNRgD1q_3j4nofasfkgvi-Cls6akclEWcfwRhhM4pcwD`,
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
export default topTracks;