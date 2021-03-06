import React from "react";
import { Link } from "react-router-dom";

const HeaderImg = () => {
  return (
    <Link to="/">
      <img src={`/img/logo.png`} width="100%" alt="logo" />
    </Link>
  );
};

export default HeaderImg;
