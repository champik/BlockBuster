import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(config => {
    config.params = {
        api_key: process.env.REACT_APP_API_KEY
    };
    return config;
});

export default axios;
