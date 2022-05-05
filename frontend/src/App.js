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
import VideoPlayer from "./components/VideoPlayer/videoPlayer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';



function App() {

  const [searchVideos, setSearchVideoes] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("vrAMRxBB5KI")
  const [relatedVideoId, setRelatedVideoId] = useState("vrAMRxBB5KI")
  // make hook to save related video results


  useEffect(() => {
    getSearchVideo()
  }, [])

  async function getSearchVideo(searchTerm ="bob ross"){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8&part=snippet&maxResults=5`)
    console.log(response.data.items)
    setSearchVideoes(response.data.items)
  }
  async function getRelatedVideo(searchTerm = {currentVideoId}){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoId}&type=video&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8`)
    console.log(response.data.items)
    setRelatedVideoId(response.data.items)
  
  }
// make another axios call for related videos, you will plug in currentVideoId in this one just like you did searchTerm in the above example
/// then you will need to pass the value saved in the hook above down to a compoent do display the related videos, just like you did with SearchPage



  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <SearchBar getSearchVideo={getSearchVideo} />
              <VideoPlayer videoId={currentVideoId}/>
              <SearchPage videos={searchVideos} setId={setCurrentVideoId}/>
              <RelatedVideos videos={relatedVideoId} setId={setCurrentVideoId}/>
  
  
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
