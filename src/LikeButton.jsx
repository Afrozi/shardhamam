import React from 'react'
import { useState } from 'react'
const LikeButton = () => {
  let [isLiked, setIsLiked] = useState(false);
  let [count,setcount] = useState(0);

  let toggleLike = () =>{
      setIsLiked(!isLiked);
      setcount(count+1);
  };

  let styleLike =  {color: "red"};
  return (
    <div>
      <p>Count = {count}</p>
    <p onClick={toggleLike}>
      { 
      isLiked ?  ( <i className="fa-regular fa-heart"></i> ): (
        <i className ="fa-solid fa-heart"style={styleLike}></i>
      )
      }
        </p>
        </div>
  )
}

export default LikeButton