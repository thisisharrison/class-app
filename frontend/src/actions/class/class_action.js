import {
  getClasses,
  postClass,
  showClass,
  patchClass,
  deleteClass
} from '../../util/class/class_api_util'

export const RECEIVE_CLASSES = 'RECEIVE_CLASSES';
export const RECEIVE_NEW_CLASS = 'RECEIVE_NEW_CLASS';
export const RECEIVE_CLASS = 'RECEIVE_CLASS';
export const REMOVE_CLASS = 'REMOVE_CLASS';


export const receiveClasses = classes => ({ 
  type: RECEIVE_CLASSES,
  classes
})
export const receiveNewClass = _class => ({ 
  type: RECEIVE_NEW_CLASS,
  _class
})
export const receiveClass = (_class) => ({ 
  type: RECEIVE_CLASS,
  _class
})
export const removeClass = (_class) => ({
  type: REMOVE_CLASS,
  _class
})

export const fetchClasses = (data) => dispatch => { 
  // data to query string

  // temp1.tags.reduce((acc, cur) => acc + 'tags=' + cur + '?', '?')
  const queryString = '?' + Object.keys(data).map(key => key + '=' + data[key]).join('&')
  return (
  getClasses(queryString)
    .then(classes => dispatch(receiveClasses(classes)))
    .catch(err => console.log(err))
)}

export const fetchClass = id => dispatch => (
  showClass(id)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => console.log(err))
)

export const createClass = data => dispatch => {
  return (
  postClass(data)
    .then(_class => {
      dispatch(receiveNewClass(_class))
    })
    .catch(err => console.log(err))
  )
}

export const updateClass = (id, data) => dispatch => (
  patchClass(id, data)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => console.log(err))
)

export const destroyClass = id => dispatch => (
  deleteClass(id)
    .then(_class => dispatch(removeClass(_class)))
    .catch(err => console.log(err))
)