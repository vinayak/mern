import axios from 'axios';
console.log(process.env.NODE_ENV);
let port=''
if(process.env.NODE_ENV==='development'){
  port=':3001'
}
axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname + port+'/api/';

export default axios;
