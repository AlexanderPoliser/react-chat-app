import React from "react";
import firebase from "firebase/app";
import { firebaseAuth } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.css";
import "../styles/button.css";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithPopup(provider);
  };
  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      <FcGoogle className="google-icon" />
      Iniciar sessão com Google
    </button>
  );
};
export default SignIn;
