
import axios from "axios"

const Axiosinstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
   
  });
export default Axiosinstance