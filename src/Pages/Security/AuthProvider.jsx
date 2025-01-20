import {  createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import axios from "axios";
import auth from "./firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookprovider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);  
}

  const updateProfiles = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);

      // get and set token
      if(currentUser){
          axios.post('https://server-omega-cyan.vercel.app/jwt', {email: currentUser.email})
          .then(data =>{
              localStorage.setItem('access-token', data.data.token)
              setLoading(false);
          })
      }
      else{
          localStorage.removeItem('access-token')
      }

      
  });
  return () => {
      return unsubscribe();
  }
}, [])


  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    signIn,
    updateProfiles,
    logOut,
    githubLogin,
    facebookSignin,
    forgetPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;