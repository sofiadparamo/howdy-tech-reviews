import axios from 'axios';

const USER_API_URL = "http://localhost:5000/listings";

class ListingService {
  getListings() {
    return axios.get(USER_API_URL);
  }
}

export default new ListingService()
