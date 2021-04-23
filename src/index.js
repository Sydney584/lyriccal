// getting data
const BASE_URL = "https://api.lyrics.ovh";

function getLyrics() {
    const url = `${BASE_URL}/v1/Janet Jackson/control`;
    return fetch(url)
        .then(res => res.json())
   
}
// console.log to see if it returns an error 404 which it should with object error no lyrics found. It did
// The promise is working correctly . console log with one artist and one song to see if
// lyrics were retrieved during console.log they were. 2 tests passed. 
const lyrics = getLyrics();
console.log(lyrics);
getLyrics().then(data => console.log(data));


// create test div for Janet Jackson data
/* <div class="lyrics" id="lyrics"> 
</div> */


  

