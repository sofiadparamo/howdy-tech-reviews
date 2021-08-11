import axios from 'axios'

const LISTING_API_URL = "http://localhost:5000/listings";

class ListingAPI {
  all() {
    return axios.get(LISTING_API_URL);
  }

  get(id) {
    return axios.get(LISTING_API_URL + '/' + id);
  }

  post(productName, productDescription, rating) {
    var data = JSON.stringify({
      "productName": productName,
      "productDescription": productDescription,
      "rating": rating
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5000/listings',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
const ListingsAPI = new ListingAPI();
export default ListingsAPI
