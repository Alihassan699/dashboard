import React from 'react';
import "../styles/Profile.css";

const userName = "Ali Hassan";
const address = "Multan,Punjab,Pakistan";

function Profile() {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <img src="" alt="Profile Picture" className="profile-picture" />
      <div className="personal-information">
        <h2>Personal Information</h2>
        <p>Name: {userName}</p>
        <p>Years of Experience: 2</p>
        <p>Speciality: Mern Stack WebDevelopment</p>
      </div>
      <div className="contact-information">
        <h2>Contact Information</h2>
        <p>Email: yesalihassan@gmail.com</p>
        <p>Phone Number: +92 323 81300 30</p>
        <p>Address:{address}</p>
      </div>
    </div>
  );
}

export default Profile;