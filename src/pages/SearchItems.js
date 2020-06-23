import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const search = () => {
    setSearchItem("");
  };

  return (
    <SearchInputForm>
      <input
        value={searchItem}
        placeholder="검색할 내용을 입력하세요!"
        onChange={onChangeInput}
      />
      <Link to="/search/:searchitem">
        <button onClick={search}>검색</button>
      </Link>
    </SearchInputForm>
  );
};

export default SearchItems;
