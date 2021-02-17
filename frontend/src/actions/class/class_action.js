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
export const RECEIVE_CLASS_ERRORS = 'RECEIVE_CLASS_ERRORS';
export const START_LOADING_ALL_CLASSES = 'START_LOADING_ALL_CLASSES'; 
export const START_LOADING_SINGLE_CLASS = 'START_LOADING_SINGLE_CLASS'; 


export const receiveClasses = classes => ({ 
  type: RECEIVE_CLASSES,
  classes
});

export const receiveNewClass = _class => ({ 
  type: RECEIVE_NEW_CLASS,
  _class
});

export const receiveClass = (_class) => ({ 
  type: RECEIVE_CLASS,
  _class
});

export const removeClass = (_class) => ({
  type: REMOVE_CLASS,
  _class
});

export const receiveClassErrors = errors => ({
  type: RECEIVE_CLASS_ERRORS,
  errors
});

export const startLoadingAllClasses = () => ({
  type: START_LOADING_ALL_CLASSES
});

export const startingLoadingSingleClass = () => ({
  type: START_LOADING_SINGLE_CLASS
});

export const fetchClasses = (queryParams) => dispatch => { 
  dispatch(startLoadingAllClasses());
  return (
  getClasses(queryParams)
    .then(classes => dispatch(receiveClasses(classes)))
    .catch(err => dispatch(receiveClassErrors(err.response.data)))
)};

export const fetchClass = id => dispatch => {
  dispatch(startingLoadingSingleClass());
  return (
  showClass(id)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => dispatch(receiveClassErrors(err.response.data)))
)};

export const createClass = data => dispatch => (
  postClass(data)
    .then(_class => {
      dispatch(receiveNewClass(_class))
    })
    .catch(err => dispatch(receiveClassErrors(err.response.data)))
);

export const updateClass = (id, data) => dispatch => (
  patchClass(id, data)
    .then(_class => dispatch(receiveClass(_class)))
    .catch(err => dispatch(receiveClassErrors(err.response.data)))
);

export const destroyClass = id => dispatch => (
  deleteClass(id)
    .then(_class => dispatch(removeClass(_class)))
    .catch(err => dispatch(receiveClassErrors(err.response.data)))
);