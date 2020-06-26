// 아이템 출력
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RelationItemForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  width: 250px;
  height: 70px;
  margin-bottom: 20%;
`;

const RelationItems = ({ data, setName }) => {
  const name = data.name.split(" ").join("");

  //두 개 이상의 세트에 적용될 경우
  const setItemName = typeof setName === "object" ? setName[0] : setName;

  return (
    <Link to={`/setitems/${setItemName}/${data.name}`}>
      <RelationItemForm>
        <img
          alt={data.name}
          src={`/img/${setItemName}/${name.toLowerCase()}.png`}
        />
        <h3>{data.name}</h3>
      </RelationItemForm>
    </Link>
  );
};

export default RelationItems;
