import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

// Styles
import { HeadWrapper } from "../styles/Header.style";

const Header = () => {
  const { myData, loading, error } = useSelector((state) => state.myData);

  if (loading) {
    return <h1>LOADING ...</h1>;
  }

  if (error) {
    return <h1>ERROR!!</h1>;
  }

  const { name, blog, html_url, avatar_url } = myData;

  return (
    <HeadWrapper>
      <Link to="/">
        <div className="logo">User Finder APP</div>
      </Link>
      <div className="header__user">
        <h3>{name}</h3>
        <img
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
          src={avatar_url}
          alt={name}
        />
        <div>
            <a target={"_blank"} rel="noreferrer" href={html_url}>
              <AiOutlineHome />
            </a>

            <a target={"_blank"} rel="noreferrer" href={blog}>
              <BsGithub />
            </a>
        </div>
      </div>
    </HeadWrapper>
  );
};

export default Header;
