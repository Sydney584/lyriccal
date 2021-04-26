// getting data
const BASE_URL = "https://api.lyrics.ovh";

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

// create search function returns object of arrays
async function searchSongs(term) {
  const res = await fetch(`${BASE_URL}/suggest/${term}`);
  const data = await res.json();
  
  showData(data);
};

// Create getLyrics for song function to display lyrics to DOM
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${BASE_URL}${artist}/${songTitle}`);
  const data = await res.json();

const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
}
// Showing the Song and Artist/Group in the Dom

function showData(data) {
  let output = '';

  data.data.forEach(song => {
    output += `
    <li>
    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
    <button class="btn" data-artist="${song.artist.name}"
    data-songtitle="${song.title}">Get Lyrics</button>

    </li>
    `;

  });

  result.innerHTML = `
  <ul class="songs">
  ${output}
  </ul>
  
  `;
}

// Creating an Event Listener for the form
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if(!searchTerm) {
    alert('Please Type your search request! ');
  }
  else {
    searchSongs(searchTerm);
  }

});

// Creating Event Listener for get lyrics link to show lyrics

result.addEventListener('click', e => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-title');
    
    getLyrics(artist, songTitle);
  }
});
