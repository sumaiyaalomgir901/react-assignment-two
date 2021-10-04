import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Blogs.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./Post.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <div className="top-content">
        <h2>We are best learning school</h2>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <button className="btn-regular">Read More</button>
      </div>
      {/* //////////////////////// */}
      <div className="blogs">
        <h1>Our Latest News</h1>
        <div className="post-area">
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
