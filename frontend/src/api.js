import axios from 'axios'

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