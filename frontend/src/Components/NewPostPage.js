import React, { useState, useEffect } from 'react'

const NewPostPage = () => {
  return(
    <div>
      <h2>Submit New Product</h2>
      <form>
        <label for="productName">Product Name:</label><br/>
        <input type="text" id="productName" name="productName"/>
        <br/><br/>
        
        <label for="productDescription">Product Description:</label><br/>
        <input type="text" id="productDescription" name="productDescription"/>
        <br/><br/>

        <label for="rating">Rating:</label><br/>
        <select id="rating" name="rating">
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
