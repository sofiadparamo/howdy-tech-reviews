import React, { useState, useEffect } from 'react'
import SiteAPI from '../api'
import './Post.css'
import Rating from "@material-ui/lab/Rating";

const Post = (props) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    SiteAPI.get(props.match.params.id)
    .then(response => {
      setPost(response.data);
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  return(
    <div className={'post-page'}>
        <h1>{post.productName}</h1>
        <div className={'rating-container'}>
            <h2>Avg. rating:</h2>
            <Rating
              name='read-only'
              value={post.rating ? post.rating : 0}
              precision={0.5}
              readOnly
              size="large"
              className={'rating'}
            />
        </div>
        <p>{post.productDescription}</p>
    </div>
  );
}

export default Post
