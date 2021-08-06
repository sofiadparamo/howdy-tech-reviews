import React from 'react'
import ListingAPI from '../api'

const Post = (props) => {
  const post = ListingAPI.get(Number(props.match.params.id))
  if(!post) {
    return <div>Sorry, post not found</div>
  }

  return(
    <div>
      <h1>{post.productName}</h1>
    </div>
  )
}

export default Post
