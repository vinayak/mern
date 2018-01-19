import axios from 'axios';

axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname + ':3001';

export default axios;
