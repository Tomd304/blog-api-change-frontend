import stylesheet from "./index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {
  const [body, setBody] = useState({
    title: "",
    content: "",
    published: true,
  });

  const onClick = (e) => {
    console.log(body);
    fetch("http://localhost:3000/post/", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const onChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
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

export default Create;
