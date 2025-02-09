const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playlist = document.getElementById('playlist');

let currentTrackIndex = 0;
const tracks = Array.from(playlist.children);

// Load track
function loadTrack(index) {
  const track = tracks[index];
  audioPlayer.src = track.getAttribute('data-src');
  audioPlayer.play();
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Previous track
prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
});

// Next track
nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
});

// Playlist selection
playlist.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const index = tracks.indexOf(e.target);
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
  }
});

// Initialize first track
loadTrack(currentTrackIndex);
