import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserListWrapper = styled.section`
  .user__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
  }

  @media screen and (max-width: 991px) {
    .user__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 500px) {
    .user__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const UserCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  img {
    border-radius: 20px;
    width: 100px;
    height: 100px;
  }
  div {
    display: grid;
    place-items: center;
  }
`;
