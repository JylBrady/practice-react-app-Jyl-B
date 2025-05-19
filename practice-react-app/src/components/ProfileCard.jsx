import React from 'react';
import '../App.css';

const ProfileCard = ({ name, age, bio }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <h3>age: {age}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;