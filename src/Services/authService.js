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
    console.log(1)
    return axiosProdiver.patch(`/profile/${userBody.params.userid}`, userBody)
    .then(response => response.data)
    .catch(error => console.log(error))
  }

  const login = body => {
    console.log(1);
    console.log(axiosProdiver.defaults.headers.common);
    return axiosProdiver.post('/login', body);
  }

export {getAll, getById, createUser, login, updateUser};

