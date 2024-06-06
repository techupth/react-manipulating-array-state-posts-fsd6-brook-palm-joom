import { useState } from "react";

function Posts() {
  const [counter, setCounter] = useState(0);
  const handleDislike = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const [counter2, setCounter2] = useState(0);
  const handleDislike2 = () => {
    if (counter2 > 0) {
      setCounter2(counter2 - 1);
    }
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{counter}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button
              class="like-button"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Like
            </button>
            <button
              class="dislike-button"
              onClick={handleDislike}>
              Dislike
            </button>
          </div>
        </div>
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title#2</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{counter2}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button
              class="like-button"
              onClick={() => {
                setCounter2(counter2 + 1);
              }}
            >
              Like
            </button>
            <button
              class="dislike-button"
              onClick={handleDislike2}>
              Dislike
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}




export default Posts;
