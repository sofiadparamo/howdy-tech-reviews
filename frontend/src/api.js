import axios from 'axios'

const base_url = process.env.REACT_APP_APIURL

const LISTING_API_URL = base_url + "/listings";
const LOGIN_API_URL = base_url + "/api/";

class API {
  all() {
    return axios.get(LISTING_API_URL);
  }

  get(id) {
    return axios.get(LISTING_API_URL + '/' + id);
  }

  post(productName, productDescription, rating) {
    const data = JSON.stringify({
      "productName": productName,
      "productDescription": productDescription,
      "rating": rating
    });

    const config = {
      method: 'post',
      url: LISTING_API_URL,
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

  login(username, password) {
    const data = {
      "username": username,
      "password": password
    }

    const config = {
      method: 'post',
      url: LOGIN_API_URL+'login',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axios(config)
  }

  register(username, password) {
    const data = {
      "username": username,
      "password": password
    }

    const config = {
      method: 'post',
      url: LOGIN_API_URL+'register',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axios(config)
  }

  session(token) {
    const data = {
      "token": token
    }

    const config = {
      method: 'post',
      url: LOGIN_API_URL+'session',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axios(config)
  }
}

const SiteAPI = new API();
export default SiteAPI
