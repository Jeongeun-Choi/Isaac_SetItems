import React from "react";
import RelationItems from "../components/RelationItems";
import { ItemTexts } from "../texts/Text";

const SearchResult = ({ match }) => {
  const searchitem = match.params.searchitem
    .split(" ")
    .join("")
    .toLowerCase();
  console.log(searchitem);
  const searchItems = ItemTexts.filter(item =>
    item.name
      .split(" ")
      .join("")
      .toLowerCase()
      .includes(searchitem)
  );

  console.log(searchItems);
  return (
    <>
      {searchItems.map(item => (
        <RelationItems data={item} setName={item.setitem} />
      ))}
    </>
  );
};

export default SearchResult;
