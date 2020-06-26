import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { message } from "antd";

const SearchInputForm = styled.div`
  margin-top: 50px;
  input {
    width: 400px;
  }
`;

const SearchItems = () => {
  const [searchItem, setSearchItem] = useState("");

  const onChangeInput = e => {
    setSearchItem(e.target.value);
  };

  const search = e => {
    //공백 입력시 페이지 넘어가지 않도록.
    if (!searchItem.trim()) {
      e.preventDefault();
      message.error("공백 X");
    }
    setSearchItem("");
  };

  return (
    <SearchInputForm>
      <input
        value={searchItem}
        placeholder="검색할 내용을 입력하세요!"
        onChange={onChangeInput}
      />
      <Link to={`/search/${searchItem}`} onClick={search}>
        <button>검색</button>
      </Link>
    </SearchInputForm>
  );
};

export default SearchItems;
