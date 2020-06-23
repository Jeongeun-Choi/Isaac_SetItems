import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  SetItems,
  SetItemExplanation,
  ItemExplanation,
  Items,
  SearchItems
} from "./pages";
import Menu from "./components/Menu";
import HeaderImg from "./components/HeaderImg";
import styled from "styled-components";
import "antd/dist/antd.css";

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
        <Route path="/search" component={SearchItems} />
        {/* <Route exact path="/items" component={Items} /> */}
        {/* <Route path="/items/:name" component={ItemExplanation} /> */}
        <Route exact path="/setitems" component={SetItems} />
        <Route exact path="/setitems/:setname" component={SetItemExplanation} />
        <Route path="/setitems/:setname/:name" component={ItemExplanation} />
      </Content>
    </>
  );
};

export default App;
