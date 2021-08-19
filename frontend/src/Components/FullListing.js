import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import './App.css'
import ListingAPI from '../api'
import './FullListing.css'
import Rating from '@material-ui/lab/Rating';

const FullListing = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    ListingAPI.all()
        .then(response => {
          setListings(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

  return(
    <div className={'listing-page'}>
      <h1>Latest Reviews</h1>

        {
          listings.length > 0 ? (
            listings.map(p => (
              <div key={p.id} className={'product'}>
                <NavLink to={`/listing/${p.id}`}>
                  <img src="https://via.placeholder.com/100" width="100" height="100" alt="product" className={'product-image'}/>
                  <div className={'product-info'}>
                    <h1>{p.productName}</h1>
                      <Rating
                      name='read-only'
                      value={p.rating}
                      readOnly
                      size="large"
                      />
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <div>No Posts!</div>
          )
        }
    </div>
  );
}

const NavLink = styled(Link)`
  position: relative;
  width: 1040;
  height: 171;
  margin: 20;
`

export default FullListing