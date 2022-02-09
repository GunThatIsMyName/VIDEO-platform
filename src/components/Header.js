import React from "react";
import { Link } from "react-router-dom";

// Styles
import { HeadWrapper } from "../styles/Header.style";

const Header = () => {
  return (
    <HeadWrapper>
      <Link to="/">
        <div className="logo">MOIVE APP</div>
      </Link>
      <div className="header__user">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="user_image"
        />
      </div>
    </HeadWrapper>
  );
};

export default Header;

