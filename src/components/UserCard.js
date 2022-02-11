import React from "react";
import { UserCardWrapper } from "../styles/MovieList.style";

const UserCard = ({ login, id, avatar_url, html_url }) => {
  return (
    <UserCardWrapper to={`user/${login}`}>
      <img src={avatar_url} alt={avatar_url} />
      <div>
        <h3>{login}</h3>
        <p>View More</p>
      </div>
    </UserCardWrapper>
  );
};

export default UserCard;
