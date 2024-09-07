import axios from 'axios'
// import Cookies from "js-cookie";



const axiosConfig = axios.create({
    // baseURL: "https://bookingclone-iti.onrender.com"
    baseURL: "https://booking-com-node.vercel.app"
});
// axiosConfig.interceptors.request.use(
//     function (config) {
//         config.headers['Authorization'] = localStorage.getItem('token');
//         config.headers['Access-Control-Allow-Origin'] = '*';
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// )



export default axiosConfig;
