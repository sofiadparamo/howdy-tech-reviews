import axios from 'axios'
/*
const ListingAPI = {
  listings: [
    { id: 1, productName: "iPhone", rating: 4 },
    { id:2, productName: "Slack", rating: 3 },
    { id:3, productName: "Arsalan", rating: 5 }
  ]
  
  listings: ListingService.getListings(),
  all: function() { return this.listings },
  get: function(id) {
    const isListing = p => p.id === id
    return this.listings.find(isListing)
  }
}

export default ListingAPI
*/

const LISTING_API_URL = "http://localhost:5000/listings";

class ListingAPI {
  constructor() {
    this.listings = axios.get(LISTING_API_URL);
  }
 
  all() {
    return axios.get(LISTING_API_URL);
  }
}

const ListingsAPI = new ListingAPI();
export default ListingsAPI
