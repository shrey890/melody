import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong }) => {
    if (!songs) {
        return <div>No songs available</div>;
    }
console.log(songs)
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                { songs.map((song) => (
                    <LibrarySong
                        song={ song }
                        setCurrentSong={ setCurrentSong }
                        songs={ songs }
                        id={ song.id }
                        key={ song.id }
                    />
                )) }
            </div>
        </div>
    );
};
export default Library