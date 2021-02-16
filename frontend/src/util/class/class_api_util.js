import axios from 'axios';

export const getClasses = queryString => {
  
  return axios.get(`/api/classes/${queryString}`)
}

export const postClass = data => (
  axios.post('/api/classes', data)
)

export const showClass = id => (
  axios.get(`/api/classes/${id}`)
)

export const patchClass = (id, data) => (
  axios.patch(`/api/classes/${id}`, data)
) 

export const deleteClass = id => (
  axios.delete(`/api/classes/${id}`)
)

export const getAdminClasses = () => (
  axios.get('/api/classes/admin/all')
)