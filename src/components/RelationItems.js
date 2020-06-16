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

const RelationItem = ({ data, setName }) => {
  const name = data.name.split(" ").join("");
  return (
    <Link to={`/setitems/${setName}/${data.name}`}>
      <RelationItemForm>
        <img
          alt={data.name}
          src={`/img/${setName}/${name.toLowerCase()}.png`}
        />
        <h3>{data.name}</h3>
      </RelationItemForm>
    </Link>
  );
};

export default RelationItem;
