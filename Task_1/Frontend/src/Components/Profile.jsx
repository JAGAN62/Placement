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
        <div className="image-box">
          <img
            src="/Profile.jpeg"
            alt="profile"
          />
        </div>
      )}
    </div>
  )
}

export default Profile
