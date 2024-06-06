import { useState } from "react";
import Data from "./DataPosts";

function Posts() {
  let like = Data.map((item)=> item.likes)
  console.log(like)
  const [counter, setCounter] = useState(like);
  
  const handleLike = (index)=>{
    let resultLike = [...counter]
    resultLike[index] +=1
    setCounter(resultLike);
  }
  const handleDislike = (index)=>{
    let resultDisLike = [...counter]
    if((resultDisLike[index])<=0){
      resultDisLike[index]=0
    }else{resultDisLike[index] -=1}
    setCounter(resultDisLike);
  }
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {Data.map((item, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>{item.title} #{item.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{counter[index]}</span>
                </div>
              </div>
              <p class="post-content">
                {item.content}
              </p>
              <div class="post-actions">
                <button class="like-button" onClick={()=>{handleLike(index)}}>Like</button>
                <button class="dislike-button" onClick={()=>{handleDislike(index)}}>Dislike</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;

