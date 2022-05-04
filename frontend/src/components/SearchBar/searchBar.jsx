import {} from 'react-router-dom'
import './searchBar.css'



const SearchBar = (props) => {
    
    const [searchVideo, setSearchVideo] = useState("");
  
    function searchBar(event) {
        event.preventDefault();
        let response = props.videos.filter((video) => {
    
        if (video.album.includes(searchVideo)) { 
            return true;
            } else if (video.artist.includes(searchVideo)) {
                return true;
            } else if (video.title.includes(searchVideo)) {
                return true;
            } else if (video.album.includes(searchVideo)) {
                return true;
            } else if (video.release_date.includes(searchVideo)) {
                return true;
            } else if (video.genre.includes(searchVideo)) {
                return true;
        }
    });

    props.setVideos(response);
    
    setSearchVideo("")
        if (searchVideo === "") {
    props.getAllVideos()
    }
    }

return (
    <div className='SearchBar'>
        <form onSubmit={searchBar}>
        <div>
            <input
                className='searchVideo'
                type="text"
                value={searchVideo}
                onChange={(e) =>  setSearchVideo(e.target.value)}
                placeholder="Find Your Video!"
                />{" "}
                <button className='findvideo' type="submit">FIND VIDEO</button>
        </div>
        </form>
    </div>
    
);
}

export default SearchBar