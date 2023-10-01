import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.css'
import data from './util'
import Library from './components/Library';
function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={ currentSong } />
      <Player
        isPlaying={ isPlaying }
        setIsPlaying={ setIsPlaying }
        currentSong={ currentSong } />
        <Library Songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
