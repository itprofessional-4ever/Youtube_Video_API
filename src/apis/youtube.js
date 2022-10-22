import axios from 'axios';

const KEY = 'AIzaSyDqWIMXvU6NOggScPgN76r7ZqcwXtQmIAc';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});