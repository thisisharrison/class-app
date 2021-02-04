import axios from 'axios';

// get all class times of a given class
export const getClassTimes = id => (
  axios.get(`/api/classtimes/class/${id}`)
)

// create a class time for a class
export const postClassTime = (id, data) => (
  axios.post(`/api/classtimes/class/${id}`, data)
)

// edit a class time 
export const patchClassTime = (id, data) => (
  axios.patch(`/api/classtimes/${id}`, data)
)

// delete a class time 
export const deleteClassTime = (id) => (
  axios.delete(`/api/classtimes/${id}`)
)