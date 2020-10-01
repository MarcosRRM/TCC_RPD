import axios from 'axios';
import AuthData from './AuthData';

const axiosInstance = axios.create();

//#region Axios SetUp

//Defaults
axiosInstance.defaults.timeout = 30;

axiosInstance.interceptors.request.use(
  async (request) => {

    //Place a JWT Token Header in every request, if it exists
    let currentJwt = await AuthData.getJwtToken();
    console.log('requesting with token:',currentJwt);
    if (currentJwt)
      request.headers['authorization'] = `Bearer ${currentJwt}`;
    return request
  }

);

//#endregion


export default axiosInstance;
