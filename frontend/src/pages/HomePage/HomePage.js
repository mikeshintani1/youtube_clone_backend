import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CreatePost from "../../components/CommentForm/commentForm";
import axios from "axios";
import CustomButton from "../../components/LikeDislikeButton/LikeDislike";
import CreateReply from "../../components/ReplyForm/replyForm";
import VideoPlayer from "../../components/VideoPlayer/videoPlayer";
import SearchBar from "../../components/SearchBar/searchBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [video, setVideo] = useState([]);
  // const [reply, setReply] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=BKLcz0Aeh08&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideo();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>

      <CreatePost />
      <CreateReply/>

      </div>
      <CustomButton message="CACA"/>
      {video &&
        video.map((el) => (
          <p key={el.id}>
            {el.year} {el.make} {el.model}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
