import React from "react";
import "../css/Profile.css";

const Profile = ({ user }) => {
  if (!user) {
    return <p className="no-user">No user data available</p>;
  }

  const { name, email, role, avatar, joinedAt } = user;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={
            avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`
          }
          alt={name}
          className="profile-avatar"
        />

        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
          <span className="profile-role">{role || "Student"}</span>
        </div>
      </div>

      {joinedAt && (
        <p className="profile-joined">
          Joined on <strong>{joinedAt}</strong>
        </p>
      )}
    </div>
  );
};

export default Profile;
