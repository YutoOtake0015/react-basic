import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [clicked]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      {posts.title}

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ApiFetch;
