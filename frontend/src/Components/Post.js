import React, { useState, useEffect } from 'react'
import ListingAPI from '../api'

const Post = (props) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    ListingAPI.get(props.match.params.id)
    .then(response => {
      setPost(response.data);
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  return(
    <div>
      <h1>{post.productName}</h1>
    </div>
  );
}

export default Post
