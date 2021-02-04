import {
  RECEIVE_CLASSTIMES,
  RECEIVE_NEW_CLASSTIME,
  REMOVE_CLASSTIME,
  EDIT_CLASSTIME
} from '../../actions/classtime_action';

const _initialState = {
  all: {},
  new: undefined
}
const classTimeReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CLASSTIMES:
      newState.all = {
        ...newState.all, ...action.classTimes.data
      }
      return newState;
    case RECEIVE_NEW_CLASSTIME:
      newState.new = undefined;
      let class_id = action.classTime.data.class
      let classTime_id = action.classTime.data._id
      // If edit class time, new classtime is pushed to the back
      newState.all[class_id] = [...newState.all[class_id], action.classTime.data]
      // So we'll find the first occurance of same id and delete
      let dup = newState.all[class_id].filter(classtime => classtime._id === classTime_id)
      if (dup.length > 1) {
        let idx = newState.all[class_id].find((classtime) => classtime._id === classTime_id)
        newState.all[class_id].splice(idx, 1);
      }
      return newState;
    case REMOVE_CLASSTIME:
      let classId = action.classTime.data.class
      let classTimeId = action.classTime.data._id
      newState.all[classId] = newState.all[classId].filter(classtime => classtime._id !== classTimeId)
      return newState;

    case EDIT_CLASSTIME:
      newState.new = action.classTime
      return newState;
    default: 
      return state;

  }
}

export default classTimeReducer;