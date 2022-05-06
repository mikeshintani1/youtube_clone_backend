import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReactDOM from "react-dom";

import axios from "axios";
import CustomButton from "../../components/LikeDislikeButton/LikeDislike";
import CreateReply from "../../components/ReplyForm/replyForm";
import CreatePost from '../../components/CommentForm/CommentForm';
import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SearchBar from "../../components/SearchBar/searchBar";
import DisplayPost from "../../components/CommentList/commentList";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [video, setVideo] = useState([]);
  // const [reply, setReply] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState([])

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=BKLcz0Aeh08&key=AIzaSyCjBTtSq2A2IWbTfV0uUN-LMhuBc2UzKM8", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setVideo(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchVideo();
  // }, [token]);


  


    useEffect(()=> {
      getAllComments()
    },[])
    
  
  const isLoggedIn = props.isLoggedIn;

  async function getAllComments (){
    try {
      if(isLoggedIn === true){
        let allComments = await axios.get('http://127.0.0.1:8000/api/yt_clone/')
          setComments(allComments.data)
          setNewComments(allComments.data)
      }
      
    } catch (error) {
      console.log(error.message);    
    }
  }

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       let response = await axios.get('http://127.0.0.1:8000/api/yt_clone/', {
  //         headers: {
  //           Authorization: 'Bearer ' + token,
  //         },
  //       });
  //       setComments(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchComments([]);
  // }, [token]);




  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>

<<<<<<< Updated upstream
=======
      <CreatePost />
      <CreateReply/>
      <CommentList comments={comments}/>
>>>>>>> Stashed changes

      </div>
      <CustomButton message="CACA"/>
      {video &&
        video.map((el) => (
          <p key={el.id}>
            {el.year} {el.make} {el.model}
          </p>
        ))}
      {comments&&
        comments.map((el) => (
          <p key = {el.id}>
              {el.user} {el.video_id} {el.text} {el.likes} {el.dislikes}
          </p>
        ))}

    </div>
  );
};

export default HomePage;
