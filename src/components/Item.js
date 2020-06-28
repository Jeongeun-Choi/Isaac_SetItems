// 아이템 출력
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  width: 250px;
  height: 70px;
  margin-bottom: 20%;
  :hover {
    border: 1px solid #c4c4c4;
    box-shadow: 4px 4px;
    color: #9d9d9d;
    transition: 0.5s;
  }
`;

const Item = ({ data, setName }) => {
  const name = data.name.split(" ").join("");

  //두 개 이상의 세트에 적용될 경우
  const setItemName = typeof setName === "object" ? setName[0] : setName;

  return (
    <Link to={`/setitems/${setItemName}/${data.name}`}>
      <ItemForm>
        <img
          alt={data.name}
          src={`/img/${setItemName}/${name.toLowerCase()}.png`}
        />
        <h3>{data.name}</h3>
      </ItemForm>
    </Link>
  );
};

export default Item;
