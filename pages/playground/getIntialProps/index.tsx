import React, { useEffect } from 'react';

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api";

const DemoGetIntialProps = () => {  
  useEffect(() => {
    fetch(BASE_URL + "/post/getListPagination.php?pagesize=3&currPage=1")
      .then(response => response.json())
      .then(data => console.log(data.posts));
  },[]);

  return (
    <div className="container">
      <h1>Demo GetIntialProps</h1>
    </div>
  )
}

export default DemoGetIntialProps;