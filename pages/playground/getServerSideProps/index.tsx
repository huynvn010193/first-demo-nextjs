import React, { useEffect, useState } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

type PostType = {
  PID: string;
  post_content: string;
};

type PropsType = {
  posts: PostType[];
};

// type PagePropsType = NextPage<
//   InferGetServerSidePropsType<typeof getServerSideProps>
// >;

const DemoGetServerSideProps: NextPage = () => {
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
      <h1>Demo getServerSideProps</h1>
      <Link href="/playground/getServerSideProps/test">
        <a>Quay trở lại trang Test</a>
      </Link>
      {/* <ul>
        {posts.map((posts) => (
          <li key={posts.PID}>{posts.post_content}</li>
        ))}
      </ul> */}
    </div>
  );
};

DemoGetServerSideProps.defaultProps = {
  posts: [],
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const response = await fetch(
//   //   BASE_URL + "/post/getListPagination.php?pagesize=10&currPage=1"
//   // );
//   // const data = await response.json();

//   // const props: PropsType = {
//   //   posts: data.posts,
//   // };

//   const props: PropsType = {
//     posts: [],
//   };

//   return { props };
// };

export default DemoGetServerSideProps;
