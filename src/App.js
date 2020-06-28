/**
 *  / : home
 *  /search : 검색화면
 *  /setitems : 세트 아이템 모음
 */
import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  SetItems,
  SetItemExplanation,
  ItemExplanation,
  SearchItems,
  SearchResult
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
  /* text-align: center; */
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
        <Route path="/search/:searchitem" component={SearchResult} />
        <Route exact path="/setitems" component={SetItems} />
        <Route exact path="/setitems/:setname" component={SetItemExplanation} />
        <Route path="/setitems/:setname/:name" component={ItemExplanation} />
      </Content>
    </>
  );
};

export default App;
