import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import './App.css'
import ListingAPI from '../api'

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
    <div>
      <ul>
        {
          listings.length > 0 ? (
            listings.map(p => (
              <li key={p.id}>
                <NavLink to={`/listing/${p.id}`}>
                  <img src="https://via.placeholder.com/112" width="112" height="112"/>
                  <div>
                    <h1>{p.productName}</h1>
                    <h2>Avg Rating: {p.rating}/5 stars</h2>
                  </div>
                </NavLink>
              </li>
            ))
          ) : (
            <div>No Posts!</div>
          )
        }
      </ul>
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