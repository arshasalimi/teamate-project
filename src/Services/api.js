import axios from "axios"
const BaseUrl = "https://dummyjson.com"
const Api = axios.create({
    baseURL:BaseUrl
});
export default Api