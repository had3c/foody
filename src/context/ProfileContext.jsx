import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');
  const [fullName, setFullName] = useState(localStorage.getItem('fullName') || '');

  const updateProfile = (image, name) => {
    setProfileImage(image);
    setFullName(name);
    localStorage.setItem('profileImage', image);
    localStorage.setItem('fullName', name);
  };

  return (
    <ProfileContext.Provider value={{ profileImage, fullName, updateProfile,setProfileImage, userData, setUserData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
