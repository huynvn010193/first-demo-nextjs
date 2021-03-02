import React, { useEffect, useState } from 'react';

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

const DemoGetIntialProps = () => {
  const [posts, setPosts] = useState([]);   
  useEffect(() => {
    fetch(BASE_URL + "/post/getListPagination.php?pagesize=10&currPage=1")
      .then(async response => {
        const data = await response.json();
        console.log("data", data.posts);
        setPosts(data.posts);
      }) // chuyển đổi res về dạng json.
  },[]);

  return (
    <div className="container">
      <h1>Demo GetIntialProps</h1>
      <ul>
        {
          posts.map((posts) =><li key={posts.PID}>{posts.post_content}</li>)
        }
      </ul>
    </div>
  )
}

export default DemoGetIntialProps;