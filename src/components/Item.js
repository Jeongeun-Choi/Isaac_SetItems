import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const ItemForm = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Item = ({ name }) => {
  return (
    <ItemForm>
      <Link to={`/setitems/${name}`}>
        <Card
          hoverable
          bordered={false}
          style={{ width: 200 }}
          cover={<img alt={`${name}`} src={`/img/${name}/${name}.png`} />}
        >
          <Card.Meta title={name.toUpperCase()} />
        </Card>
      </Link>
    </ItemForm>
  );
};

export default Item;
