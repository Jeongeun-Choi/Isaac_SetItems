import React from "react";

const RelationItem = ({ match }) => {
  const item = match.params.name;
  return <div>{item}</div>;
};

export default RelationItem;
