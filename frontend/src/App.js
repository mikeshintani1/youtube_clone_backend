// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/videoPage";
import SearchPage from "./components/SearchPage/SearchPage"
import RelatedVideos from "./components/RelatedVideos/RelatedVideos"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/searchBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
<<<<<<< Updated upstream
import NameForm from "./components/NameForm/NameForm";
import DisplayPost from "./components/CommentList/commentList";
import CreatePost from "./components/CommentForm/commentForm";
import CreateReply from "./components/ReplyForm/replyForm";
=======
import CommentList from "./components/CommentList/CommentList";
import CreatePost from "./components/CommentForm/CommentForm";

>>>>>>> Stashed changes

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import RelatedVids from "./components/SearchPage/RelatedVids";



function App() {

  const [searchVideos, setSearchVideoes] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("")
  const [relatedVideoId, setRelatedVideoId] = useState("vrAMRxBB5KI")
  const [currentVideoTitle, setCurrentVideoTitle] = useState("vrAMRxBB5KI")
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')

<<<<<<< Updated upstream

  const [entries, setEntries] = useState([{name:'Bob Biggums', post: 'I like pie'}])

  async function addNewPost(entry){
    let tempEntries = [...entries,entry];
    setEntries(tempEntries);
  }
=======
  
>>>>>>> Stashed changes


  // useEffect(() => {
  //   getSearchVideo()
  // }, [])

<<<<<<< Updated upstream
  async function getSearchVideo(searchTerm ="bob ross"){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=AIzaSyD70oB-hMmV-re9RaOLtE8d7nAA5CNYwv8&part=snippet&maxResults=5`)
    console.log(response.data.items)
    setCurrentVideoId(response.data.items[0].id.videoId)
    setTitle(response.data.items[0].snippet.title)
    setDescription(response.data.items[0].snippet.description)
    setSearchVideoes(response.data.items)
  }
  // async function getRelatedVideo(searchTerm = {currentVideoId}){
  //   let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoId}&type=video&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8&part=snippet`)
  //   console.log(response.data.items)
  //   setRelatedVideoId(response.data.items)
=======
  // async function getSearchVideo(searchTerm ="bob ross"){
  //   let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8&part=snippet&maxResults=5`)
  //   console.log(response.data.items)
  //   setSearchVideoes(response.data.items)
  //   setCurrentVideoId(response.data.items[0].id.videoId)
  //   setTitle(response.data.items[0].snippet.title)
  //   setDescription(response.data.items[0].snippet.description)
  // }
  async function getRelatedVideo(searchTerm = {currentVideoId}){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoId}&type=video&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8`)
    console.log(response.data.items)
    setRelatedVideoId(response.data.items)
>>>>>>> Stashed changes
  
  // }
  async function getVideoInfo(searchTerm = {currentVideoTitle}){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoId}&type=video&key=AIzaSyD70oB-hMmV-re9RaOLtE8d7nAA5CNYwv8`)
    console.log(response.data.items)
    setCurrentVideoTitle(response.data.items)
  
  }



<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
<<<<<<< Updated upstream
              <VideoPlayer videoId={currentVideoId} title = {title} description={description} videoInfo ={currentVideoTitle} videos={searchVideos}/>
              <CreatePost className='createpost' />
              <DisplayPost className='displaypost' parentPosts = {entries}/>
              {/* <NameForm addNewPostProperty={addNewPost}/> */}
              <SearchBar className='searchvideo' getSearchVideo={getSearchVideo} />
              {/* <RelatedVideos videos={relatedVideoId} setId={setCurrentVideoId}/> */}
              <RelatedVids videoId = {currentVideoId}/>
              <SearchPage videos={searchVideos} setTitle={setTitle} setId={setCurrentVideoId}/>
              <div className='row-createcomment'>
    
              </div>
=======
              {/* <SearchBar getSearchVideo={getSearchVideo} /> */}
              <VideoPlayer videoId={currentVideoId} title = {title} description={description} videoInfo ={currentVideoTitle} videos={searchVideos}/>
              {/* <CommentList vidComments={newComments}/>
              <CreatePost createPost= {CreatePost} /> */}
              <SearchPage videos={searchVideos} setId={setCurrentVideoId}/>
              <RelatedVideos videos={relatedVideoId} setId={setCurrentVideoId}/>
  
>>>>>>> Stashed changes
  
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videopage" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
