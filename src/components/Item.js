import React from "react";
import { Link, Route } from "react-router-dom";
import { Card } from "antd";

const Item = ({ name }) => {
  return (
    <>
      <Link to={`/setitems/${name}`}>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt={`${name}`} src={`/img/${name}/${name}.png`} />}
        >
          <Card.Meta title={name.toUpperCase()} />
        </Card>
      </Link>
    </>
  );
};

export default Item;
