import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = data => (
  axios.post('/api/users/register', data)
)

export const login = data => (
  axios.post('/api/users/login', data)
)

