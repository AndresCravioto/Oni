import axios from 'axios';

class UserService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.service = service;
  }

  getAll = () => {
    return this.service.get('/categories')
    .then(response => response.data.tests)
  }

  getById = id => {
    return this.service.get(`/categories/${id}`)
    .then(response => response.data)
  }

  createUser = userBody => {
    return this.service.post('/user/create', userBody, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}})
    .then(response => response.data)
    .catch(error => console.log(error))
  }
}

export default UserService;