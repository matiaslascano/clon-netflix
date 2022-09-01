import React from "react";
import "./Header.css";
import logoNetflix from "../imagenes/logoNetflix.png";
import netflixAvatar from "../imagenes/Netflix-avatar.png";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img src={logoNetflix} />
      </div>
      <div className="header--user">
        <img src={netflixAvatar} />
      </div>
    </header>
  );
};
