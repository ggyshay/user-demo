import React from "react";
import "./User.css";

export const User = (props) => (
  <div className="user-container">
    <div className="user-pic"></div>
    <p className="user-name">{props.name}</p>
    <p className="user-description">{props.description}</p>
    <p className="user-phone">{props.phone}</p>
  </div>
);
