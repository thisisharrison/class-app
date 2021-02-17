
import { FormControl, TextField } from '@material-ui/core'
import { SubmitInput } from '../styles/styles'
import React, { useState } from 'react'

export default function ProfileForm({ currentUser }) {
  
  const[profile, setProfile] = useState(currentUser)

  const handleChange = e => {
    const updatedProfile = Object.assign({}, profile, { [e.target.name] : e.target.value });
    setProfile(updatedProfile);
  }

  return (
    <div>
      <FormControl variant="outlined" fullWidth margin="normal">
        <TextField
          label="First Name"
          name='fname'
          onChange={handleChange}
        />

        <TextField
          label="Last Name"
          name='lname'
          onChange={handleChange}
        />

        <TextField
          label="About Me"
          name='bio'
          onChange={handleChange}
        />

        <TextField
          label="Location"
          name='city'
          onChange={handleChange}
        />

        <TextField
          label="Affiliate"
          name='affiliate'
          onChange={handleChange}
        />

        <SubmitInput type="submit" value="Save"/>
      </FormControl>
    </div>
  )
}
