import axios from 'axios';

const instance = axios.create ({
    baseURL:"https://varunjeettwhatsapp.herokuapp.com",
});

export default instance;