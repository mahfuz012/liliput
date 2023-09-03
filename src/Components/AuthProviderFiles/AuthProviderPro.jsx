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
  sendEmailVerification,
} from "firebase/auth";
import app from "@/Firebase/Firebase.config";
import axios from "axios";

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

  const actionCodeSettings = {
    handleCodeInApp: true,
  };

  const emailVerifySubmit = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unheat = onAuthStateChanged(auth, (currentUser) => {
      setProfile(currentUser);
      if (currentUser) {
        axios
          .post(`http://localhost:5000/jwt`, { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("JWT-token", data.data.token);
            setLoader(false);
          });
      } else {
        localStorage.removeItem("JWT-token");
      }
    });

    return () => {
      return unheat();
    };
  }, [auth]);

  const passValue = {
    createRegister,
    registerWithGoogle,
    resetpasswordsubmit,
    registerWithFacebook,
    logoutProfile,
    userProfile,
    loginProfile,
    loader,
    emailVerifySubmit,
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
