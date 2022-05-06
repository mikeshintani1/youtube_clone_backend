import {} from 'react-router-dom'
import './searchBar.css'
import React, { useState } from 'react';




const SearchBar = (props) => {
    
    const [searchVideo, setSearchVideo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchVideo)
        props.getSearchVideo(searchVideo);
    }
  
    

return (
    <div className='SearchBar'>
        <form >
        <div>
            <input
                className='searchVideocss'
                type="text"
                value={searchVideo}
                onChange={(e) =>  setSearchVideo(e.target.value)}
                placeholder="Find Your Video!"
                />{" "}
                <button onClick={handleSubmit} className='findvideo' type="submit" >FIND VIDEO</button>
        </div>
        </form>
    </div>
    
);
}

export default SearchBar