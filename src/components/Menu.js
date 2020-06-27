import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const LinkDiv = styled.div`
  width: 33.3%;
  text-align: center;

  a {
    color: #be3030;
    font-size: 25px;
    font-weight: bold;
  }
`;

const Menu = () => {
  return (
    <MenuForm>
      <LinkDiv>
        <Link to="/">Home</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/setitems">SetItems</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/search">SearchItems</Link>
      </LinkDiv>
    </MenuForm>
  );
};

export default Menu;
