import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [isProfile, setIsProfile] = useState(false)

  return (
    <div className="profile-container">
      <h2 className="title">User Profile</h2>

      <button
        className="toggle-btn"
        onClick={() => setIsProfile(!isProfile)}
      >
        {isProfile ? 'Hide Profile' : 'Show Profile'}
      </button>

      {isProfile && (
        <div className="image-box" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <img
            src="/Profile.jpeg"
            alt="profile"
          />
          <b>Email:</b><p>jagan.mamanduru@gmail.com</p>
          <p><b>Age:</b>23</p>
          <p></p>
        </div>
      )}
    </div>
  )
}

export default Profile
