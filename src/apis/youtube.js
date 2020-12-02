import axios from 'axios';

const KEY = 'AIzaSyAql0e0iwE0F90wn9DS23CX1_2oCXlxMoc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})