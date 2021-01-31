const Profile = ({ currentUser }) => {
  
  return (
    <div>
      <h1>{currentUser.email}</h1>
    </div>
  )
}

export default Profile;