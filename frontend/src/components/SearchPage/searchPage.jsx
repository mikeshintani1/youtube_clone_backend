import React from 'react';


const SearchPage = (props) => {


const handleClick = (event, id, title, description) => {
    event.preventDefault();
    props.setId(id)
    // props.getVideoInfo(id, title, description);
    // props.getRelatedVideoList(title);
    // props.getVideoComments()
}

return (
    <div className='searchResults'>
        <div className = 'allRelatedVideos'>
            {props.videos.map((video) => (
                  <span>
                    <div class='relatedVideo'>
                        <input type='image'
                        onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)}
                        src={video.snippet.thumbnails.medium.url}
                        />
                        <div class='relatedVideoTitle'>
                            {video.snippet.title}
                        </div>
                    </div>
                </span>    
            ))}
        </div>
    </div>
)
}    


export default SearchPage;