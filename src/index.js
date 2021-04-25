// getting data
const BASE_URL = "https://api.lyrics.ovh";

const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result')

function getArtistandSong(artist, title) {
  
  
      const url = `${BASE_URL}/v1/${artist}/${title}`;
      return fetch(url)
          .then(res => res.json())
     
  };
  
// Creating an Event Listner for the form
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if(!searchTerm) {
    alert('Please Type your search request! ');
  }
  else{
    searchSong(searchTerm);
  }

});

// function getArtistandSong() {
 
    
//     return fetch(url)
//         .then(res => res.json()).then(console.log)
   
// }
// // console.log to see if it returns an error 404 which it should with object error no lyrics found. It did
// // The promise is working correctly . console log with one artist and one song to see if
// // lyrics were retrieved during console.log they were. 2 tests passed. 
// const lyrics = getLyrics();
// console.log();
// getArtistandSong().then(data => console.log(data));


// // create test div for Janet Jackson data
// /* <div id="lyrics"> 
// </div> */

// function createLyricsDiv(lyricsObj) {
// const div = document.createElement('div'),
// p = document.createElement('p');

// p.textContent = lyricsObj.lyrics;

// div.appendChild(p);

// return div;

// }

// // 