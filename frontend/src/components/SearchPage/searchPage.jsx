import {} from 'react-router-dom'
import React from 'react';

console.log(props)

const handleClick = (event, id, title, description) => {
    event.preventDefault();
    props.getVideoInfo(id, title, description);
    props.getRelatedVideoList(title);
    props.getVideoComments()


    return (
    <div className='searchResults'>
        <div className = 'allRelatedVideos'>
            {props.video.map(video => (
                <span>
                    <div class='relatedVideo'>
                        <input type='image'
                        onClick={(event) => handleClick(event, video.id.videoID, video.sippet.title, video.snippet.description)}
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
