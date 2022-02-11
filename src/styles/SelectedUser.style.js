import styled from "styled-components";

export const PersonWrapper = styled.section`
  display: grid;
  place-items: center;
  .user__box {
    display: grid;
    grid-template-columns:repeat(4,1fr);
    div {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
    }
  }

  img{
      width:100px;
      height:100px;
      border-radius:10px;
  }
`;
