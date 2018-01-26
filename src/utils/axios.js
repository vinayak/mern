import axios from 'axios';
import store from '../store';
let port=''
if(process.env.NODE_ENV==='development'){
  port=':3001'
}
axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname + port+'/api/';

axios.interceptors.request.use(function(config) {
  const {token}= store.getState();
  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(err) {
  return Promise.reject(err);
});

export default axios;
