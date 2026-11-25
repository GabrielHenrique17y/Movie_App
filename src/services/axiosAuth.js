import axios from 'axios';

export default axios.create({
    baseURL: 'http://movie-api-pied-pi.vercel.app/',
    withCredentials: true,
});
