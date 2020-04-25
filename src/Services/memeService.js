import axiosProdiver from './axiosProvider.js';

const createMeme = memeBody => {
  return axiosProdiver.post('/newmeme', memeBody, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}})
  .then(response => response.data)
  .catch(error => console.log(error))
}


export { createMeme };

