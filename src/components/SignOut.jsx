import React from "react";
import { firebaseAuth } from "./firebase";
import "./SignOut.css";
import "../styles/button.css";

const SignOut = () => {
  return (
    firebaseAuth.currentUser && (
      <button className="sign-out" onClick={() => firebaseAuth.signOut()}>
        Encerrar sessão
      </button>
    )
  );
};

export default SignOut;
