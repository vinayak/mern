import axios from 'axios';
import store from '../store';

const {token}= store.getState();
console.log(token);
if(token){
  axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
}
let port=''
if(process.env.NODE_ENV==='development'){
  port=':3001'
}
axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname + port+'/api/';

export default axios;
