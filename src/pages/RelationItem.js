import React from "react";
import { SetItemTexts } from "../texts/ItemTexts";

const RelationItem = ({ match }) => {
  const itemName = match.params.name;
  const setName = match.params.setname;

  //세트 아이템에서의 아이템 위치를 찾아낸다.
  const index = SetItemTexts[setName].findIndex(
    setItem => setItem.name === itemName
  );

  const name = SetItemTexts[setName][index].name; //아이템 이름
  const information = SetItemTexts[setName][index].information; //아이템 설명

  return (
    <div>
      {name}, {information}
    </div>
  );
};

export default RelationItem;
