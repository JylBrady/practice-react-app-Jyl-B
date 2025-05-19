import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
    const profiles = [
        {name: "One Man", age: 56, bio: "Average Guy. Afraid of spiders. Likes to sing along to Queen while he drives."},
        {name: "Man Two", age: 36, bio: "Unique Guy. Afraid of girls and pumpkins. Doesn't talk much, but he's an expert whistler."},
        {name: "That Girl", age: 22, bio: "Conventionally Beautiful. Oozes confidence, but hiccups a lot. Sings a lot; talks a lot; snores."},
        {name: "Another Woman", age: 20, bio: "Always hungry and not terribly smart"},
        {name: "Funny Man", age: 32, bio: "Kind, helpful and makes people laugh.  Educated as well. Loves to drive"},
        {name: "Not Her", age: 30, bio: "A little annoying.  Always around.  Likes to talk. Often clueless."},
        {name: "Guitar Guy", age: 30, bio: "Talented. Smart.  Attractive.  And somehow still incredibly kind."},
        {name: "Oh Boy", age: 18, bio: "Generally nice.  Tries really hard.  Knows a lot of stuff.  Stutters."}
    ];

  return (
    <div className="profile-container">
      {profiles.map((prof, index) => (
        <ProfileCard key={index} {...prof} />
      ))}
    </div>
  );
};

export default ProfileContainer;

