import { Avatar } from '@material-ui/core';

import React from 'react'

export default function MyAvatar({ user, klass }) {
  return (
    <Avatar alt={`${user.fname + user.lname}`} src={user.photo} className={klass}/>
  )
};
