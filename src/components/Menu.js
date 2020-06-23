import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-content: space-between; */
`;

const LinkDiv = styled.div`
  width: 50%;
  text-align: center;
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
