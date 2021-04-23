// getting data
const BASE_URL = "https://api.lyrics.ovh";

function getLyrics() {
    const url = `${BASE_URL}/v1/:artist/:title`;
    return fetch(url)
        .then(res => res.json())
   
}
// console.log to see if it returns an error 404 which it should with object error no lyrics found. It did
// The promise is working correctly
const lyrics = getLyrics();
console.log(lyrics);
getLyrics().then(data => console.log(data));

