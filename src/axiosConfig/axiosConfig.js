import axios from 'axios'
const axiosConfig = axios.create({
    baseURL: "http://localhost:1724"
 
  
});
// axiosInstance.interceptors.request.use(
//     function(config)
//     {
//         config.headers['Authorization']=localStorage.getItem('token');
//         config.headers['Access-Control-Allow-Origin']='*';
//         return config;
//     },
//     function(error){
//         return Promise.reject(error);
//     }
// )

export default axiosConfig;
