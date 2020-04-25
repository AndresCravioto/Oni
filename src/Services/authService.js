import axiosProdiver from './axiosProvider.js';

  let getAll = body => {
    return axiosProdiver.post('/auth/login', body, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}})
    .then(response => response.data.tests)
  }

  let getById = id => {
    return axiosProdiver.get(`/categories/${id}`)
    .then(response => response.data)
  }

  const createUser = userBody => {
    return axiosProdiver.post('/signup', userBody, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}})
    .then(response => response.data)
    .catch(error => console.log(error))
  }


  const updateUser = userBody => {
    console.log(userBody.userId)
    return axiosProdiver.post(`/profile`, userBody, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}})
    .then(response => response.data)
    .catch(error => console.log(error))
  }

  const login = body => {
    return axiosProdiver.post('/login', body);
  }

export {getAll, getById, createUser, login, updateUser};

