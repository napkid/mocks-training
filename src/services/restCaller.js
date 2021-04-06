import axios from 'axios';

class RestCaller {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 1000,
    });
  }

  get axios() {
    return this.axiosInstance;
  }
}

const restCaller = new RestCaller();

export default restCaller;