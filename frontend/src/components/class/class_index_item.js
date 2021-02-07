import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react'
import SaveContainer from "../toggles/save_container";
import { useSelector } from "react-redux";
import { getSavesIds } from "../../reducers/selectors";


const ClassIndexItem = ({ _class, savesIds}) => {

  const teacherName = _class.admin.fname + ' ' + _class.admin.lname
  
  return (
    <div>
      <p>
        <Link to={`/classes/${_class._id}`} >
          {_class.name}
        </Link>
      </p>
      <ul>
        <li>{teacherName}</li>
        <li>{_class.description}</li>
      </ul>
      <SaveContainer 
        classId={_class._id}
        saved={savesIds.includes(_class._id)}
        />
    </div>
  )
}


export default ClassIndexItem;


