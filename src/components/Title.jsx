import React from "react";
import icon512 from "../components/assets/icons/icon512.png";
import "./Title.css";

const Title = () => {
  return (
    <div className="container">
      <h2 className="title">
        Chat App
        <img className="title-icon" src={icon512} alt="icon" />
      </h2>
    </div>
  );
};

export default Title;
