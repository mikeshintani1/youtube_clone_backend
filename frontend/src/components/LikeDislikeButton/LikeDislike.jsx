import React, { useState } from "react";
import './LikeDislike.css'

const CustomButton = (props) => {

    const [likeButtonClass, setButtonClass] = useState("inactive");
    const [hateButtonClass, setButtonClassHate] = useState("inactive");
    
    function handleClicklike(){
        if(likeButtonClass === "inactive"){
          setButtonClass("active")
          setButtonClassHate("inactive")
        }}
    
    function handleClickhate(){
        if(hateButtonClass === "inactive"){
            setButtonClass("inactive");
            setButtonClassHate("active");
        }}

    return (
        <div className='button-col'>
            <button className={likeButtonClass} type='onClick' onClick={handleClicklike} message="like">{props.message}</button>
            <button className={hateButtonClass} type='onClick' onClick={handleClickhate} message ="hate">{props.message}</button>
        </div>
    );
       
     
}
export default CustomButton