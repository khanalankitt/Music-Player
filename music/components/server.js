async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer BQBQc_4tWy2Y35QJqXyQUGd7kIC0tvzKBYL43L_T8hbt_uWFXjoVj1dnQCypM0yxf6duRGAt7G1wuIjoBDjonibKE4GIHFbFyEsRSuSF_Mv5_fTN7oFkfWbdFueyCSP-Hl7qwprkCvZRezUsFP7YiVrGdgj6nRxU7kmf2R2G_hICZMIbCQ379_3rW5TMAjUxNKFDe8IUT4D2XxPNEq9cq3g5VMYUN5era8pYAFKUN6UgiaFKIlfY16PR4LTnFHZH04dKuOE1LAkP1dDcwpriUSic`,
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