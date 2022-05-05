// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/videoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/searchBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';



function App() {

  const [searchVideoes, setSearchVideoes] = useState([]);

  useEffect(() => {
    getSearchVideo()
  }, [])

  async function getSearchVideo(searchTerm = ''){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8&part=snippet&maxResults=5`)
    console.log(response.data.items)
    setSearchVideoes(response.data.items)
  }




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
              <VideoPlayer />
              <searchPage videos={searchVideoes}/>
  
  
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
