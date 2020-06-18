import React from "react";
import styled from "styled-components";
import { SetItemsName } from "../texts/SetItemsName";
import { Link } from "react-router-dom";

const ItemForm = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  width: 250px;
  height: 70px;
  margin-bottom: 20%;
`;

const Item = ({ data }) => {
  const name = data.name.split(" ").join("");
  const setName = SetItemsName[String(data.id).slice(0, 2)];

  return (
    //   <Link to={`/setitems/${setName}/${data.name}`}>
    <ItemForm>
      <img alt={data.name} src={`/img/${setName}/${name.toLowerCase()}.png`} />
      <h3>{data.name}</h3>
    </ItemForm>
    //   </Link>
  );
};

export default Item;
