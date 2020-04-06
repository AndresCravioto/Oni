import axios from 'axios';

class CategoryService {
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

  createCategory = categoryBody => {
    return this.service.post('/category/create', categoryBody)
    .then(response => response.data)
  }
}

export default CategoryService;