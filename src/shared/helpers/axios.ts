import axios from 'axios';

let token = localStorage.getItem('accessToken');

const instance = axios.create({
  headers: {'Authorization': `Bearer ${token}`}
});

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error)
  if (error.response.status === 401) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('member');
    localStorage.removeItem('memberActivated');
    localStorage.removeItem('lastLogin');
    localStorage.removeItem('LS_ROUTE_KEY');
    if (window.location.pathname !== '/'){
      window.location.href = `/login`;
    }
  }
  return Promise.reject(error)
});

export default instance;