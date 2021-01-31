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

export const fetchClasses = () => dispatch => (
  getClasses()
    .then(classes => dispatch(receiveClasses(classes)))
    .catch(err => console.log(err))
)

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

export const editClass = data => dispatch => (
  patchClass(data)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => console.log(err))
)

export const destroyClass = id => dispatch => (
  deleteClass(id)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => console.log(err))
)