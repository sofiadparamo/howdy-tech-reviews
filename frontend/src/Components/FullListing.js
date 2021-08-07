import React from 'react'
import ListingAPI from '../api'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import './App.css'

const FullListing = () => (
  <div>
    <ul>
      {
        ListingAPI.all().map(p => (
          <li key={p.id}>
            <NavLink to={`/listing/${p.id}`}>
              <img src="https://via.placeholder.com/112" width="112" height="112" alt="Product"/>
              <div>
                <h1>{p.productName}</h1>
                <h2>Avg Rating: {p.rating}/5 stars</h2>
              </div>
            </NavLink>
          </li>
        ))
      }
    </ul>
  </div>
)

const NavLink = styled(Link)`
  position: relative;
  width: 1040;
  height: 171;
  margin: 20;
`

export default FullListing
