import stylesheet from "./index.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Update = (props) => {
  const [body, setBody] = useState({
    _id: "",
    title: "",
    content: "",
    published: true,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setBody(data.posts[0]);
      });
  }, []);

  const onChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setBody(posts.find((post) => post._id == e.target.value));
  };

  const onClick = (e) => {
    fetch("http://localhost:3000/post/" + body._id, {
      method: "put",
      mode: "cors",
      headers: {
        "auth-token": props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="label-group" style={{ marginBottom: 30 }}>
          <select name="post" onChange={handleInputChange}>
            {posts.map((post) => {
              return (
                <option value={post._id} key={post._id}>
                  {post.title}
                </option>
              );
            })}
          </select>
        </div>
        <form className="create-form">
          <div className="label-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={body.title}
              onChange={onChange}
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="label-group">
            <label htmlFor="content">Blog Content</label>
            <textarea
              onChange={onChange}
              type="text"
              value={body.content}
              name="content"
            />
          </div>{" "}
          <div className="label-group">
            <label htmlFor="published">Publish?</label>
            <select onChange={onChange} value={body.published} name="published">
              <option value={true}>True</option>
              <option value={false}>False</option>{" "}
            </select>
          </div>
          <button
            type="button"
            onClick={onClick}
            style={{ marginLeft: "auto" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
