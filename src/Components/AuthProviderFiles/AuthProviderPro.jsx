"use client";

import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "@/Firebase/Firebase.config";

export const AuthContextPro = createContext([]);

const AuthProviderPro = ({ children }) => {
  const [userProfile, setProfile] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);

  function createRegister(email, password) {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginProfile = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  function logoutProfile() {
    setLoader(true);
    return signOut(auth);
  }

  // Google Authentication  ----------------------

  const createWithGoogle = new GoogleAuthProvider();

  const registerWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, createWithGoogle);
  };

  // Facebook Authentication ----------------------------

  const createWithFacebook = new FacebookAuthProvider();
  const registerWithFacebook = () => {
    setLoader(true);
    return signInWithPopup(auth, createWithFacebook);
  };

  const resetpasswordsubmit = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unheat = onAuthStateChanged(auth, (currentUser) => {
      setProfile(currentUser);
      setLoader(false);
    });

    return () => {
      return unheat();
    };
  }, []);

  const passValue = {
    createRegister,
    registerWithGoogle,
    resetpasswordsubmit,
    registerWithFacebook,
    logoutProfile,
    userProfile,
    loginProfile,
    loader,
  };

  return (
    <div>
      <AuthContextPro.Provider value={passValue}>
        {children}
      </AuthContextPro.Provider>
    </div>
  );
};

export default AuthProviderPro;
