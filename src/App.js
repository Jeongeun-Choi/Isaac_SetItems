import React from "react";
import { Route } from "react-router-dom";
import { Home, SetItems, ItemExplanation } from "./pages";
import Menu from "./components/Menu";
import HeaderImg from "./components/HeaderImg";
import styled from "styled-components";
import "antd/dist/antd.css";
import RelationItem from "./pages/RelationItem";

const Header = styled.div`
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
`;

const App = () => {
  return (
    <>
      <Header>
        <HeaderImg />
      </Header>
      <Menu />
      <Content>
        <Route exact path="/" component={Home} />
        <Route exact path="/setitems" component={SetItems} />
        <Route exact path="/setitems/:setname" component={ItemExplanation} />
        <Route path="/setitems/:setname/:name" component={RelationItem} />
      </Content>
    </>
  );
};

export default App;
