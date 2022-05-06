import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const RelatedVids = (props) => {
    const [relatedVids, setRelatedVids] = useState([])

    async function getRelatedVideo(){
        debugger
     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&key=AIzaSyD70oB-hMmV-re9RaOLtE8d7nAA5CNYwv8&part=snippet&type=video`)
     console.log('Related vids: ',response.data.items)
     //setRelatedVideoId(response.data.items)
  
   }
   useEffect(()=>{
    getRelatedVideo()
   },[props.videoId])


const handleClick = (event, id, title, description) => {
    event.preventDefault();
    props.setId(id)
    props.setTitle(title)
    // props.getVideoInfo(id, title, description);
    // props.getRelatedVideoList(title);
    // props.getVideoComments()
}


return (
    <div className='searchResults'>
        {console.log('videoID: ', props.videoId)}
        {/* <div className = 'allRelatedVideos'>
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
        </div> */}
    </div>
)
}    


export default RelatedVids;