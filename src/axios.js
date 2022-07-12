import axios from "axios";

//base_url 
const instance = axios.create({
    //baseURL
    baseURL: 'https://jsonplaceholder.typicode.com/'
    // Header
    // timeout
})
export default instance;