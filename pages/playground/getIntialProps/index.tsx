import { type } from "os";
import React, { useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

type PostType = {
  PID: string;
  post_content: string;
};

type PropsType = {
  posts: PostType[];
};

const DemoGetIntialProps: NextPage<PropsType> = ({ posts }) => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch(BASE_URL + "/post/getListPagination.php?pagesize=10&currPage=1").then(
  //     async (response) => {
  //       const data = await response.json();
  //       console.log("data", data.posts);
  //       setPosts(data.posts);
  //     }
  //   ); // chuyển đổi res về dạng json.
  // }, []);

  return (
    <div className="container">
      <h1>Demo GetIntialProps</h1>
      <ul>
        {posts.map((posts) => (
          <li key={posts.PID}>{posts.post_content}</li>
        ))}
      </ul>
    </div>
  );
};

DemoGetIntialProps.getInitialProps = async (context: NextPageContext) => {
  const response = await fetch(
    BASE_URL + "/post/getListPagination.php?pagesize=10&currPage=1"
  );
  const data = await response.json();
  console.log("data", data);
  return {
    posts: data.posts,
  };
};

export default DemoGetIntialProps;
