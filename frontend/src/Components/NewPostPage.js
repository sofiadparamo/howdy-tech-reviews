import React, { useState } from 'react'
import ListingAPI from '../api'

const NewPostPage = () => {
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleNewEntrySubmit = (event) => {
    event.preventDefault();
    if(productName === "" || productDescription === "" || rating === 0) {
      return ;
    }
    ListingAPI.post(productName, productDescription, rating);
  };

  return(
    <div>
      <h2>Submit New Product</h2>
      <form onSubmit={handleNewEntrySubmit}>
        <label>Product Name:</label><br/>
        <input 
          value={productName}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Product Name"
          required
        />
        <br/><br/>
        
        <label>Product Description:</label><br/>
        <textarea
          value={productDescription}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter Description"
          type="text"
          rows="5"
          cols="30"
        />
        <br/><br/>

        <label form="rating">Rating:</label><br/>
        <select onChange={(event) => setRating(event.target.value.trim())}>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default NewPostPage
