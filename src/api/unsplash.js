import axios from 'axios'

const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_ACCESS_KEY}`
  }
});