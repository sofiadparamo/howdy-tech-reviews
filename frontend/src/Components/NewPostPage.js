import React, { useState } from 'react'
import SiteAPI from '../api'
import './NewPostPage.css'
import {Rating} from "@material-ui/lab";

const NewPostPage = () => {
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleNewEntrySubmit = (event) => {
    event.preventDefault();
    if(productName === "" || productDescription === "" || rating === 0) {
      return ;
    }
    SiteAPI.post(productName, productDescription, rating);
  };

  return(
    <div className={'new-product'}>
      <h2>Submit New Product</h2>
      <form className={'new-product-form'} onSubmit={handleNewEntrySubmit}>
        <label>Product Name:</label>
        <input 
          value={productName}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Product Name"
          required
        />
        <label>Product Description:</label>
        <textarea
          value={productDescription}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter Description"
          type="text"
          rows="5"
          cols="30"
        />
        <label form="rating" className={"rating-label"}>Rating:</label>
        <Rating
          name="rating-new-post"
          className={"rating-new-post"}
          value={rating}
          precision={0.5}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          size="large"
        />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default NewPostPage
