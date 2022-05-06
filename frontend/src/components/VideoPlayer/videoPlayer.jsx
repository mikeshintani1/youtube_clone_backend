import {} from 'react-router-dom'
import React from 'react';
import SearchBar from '../SearchBar/searchBar'



const VideoPlayer = (props) => {

  const handleClickVideoInfo = (event, id, title, description) => {
    event.preventDefault();
    props.getVideoInfo(id, title, description);
    // props.getRelatedVideoList(title);
    // props.getVideoComments()
  }


  
  

  return(
    <div>

      <div> 
        {props.videos.map((video) => (
          
            <span>
              onClick={(event) => handleClickVideoInfo(event, video.id.videoId, video.title, video.description)}
              src={`https://www.youtube.com/embed/${props.videoId}`}
                    <div class='VideoTitle'>
                      {video.title}
                      {video.description}
                    </div>
             </span>
          ))}
      </div>
    

    <iframe id="ytplayer" type="text/html" width='640' height='360' src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder='0'>
    </iframe>
    </div>
  )
}

export default VideoPlayer


      // 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('player', {
      //     height: '390',
      //     width: '640',
      //     videoId: 'M7lc1UVf-VE',
      //     playerVars: {
      //       'playsinline': 1
      //     },
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange
      //     }
      //   });
      // }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();