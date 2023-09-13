import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '80f186678cb240e08d0e8686f1a22122',
  },
});
