//아이템 설명
import React from "react";
import { SetItemTexts } from "../texts/ItemTexts";
import { SetItemName } from "../texts/SetItemsName";

const ItemExplanation = ({ match }) => {
  const itemName = match.params.name; //아이템 이름
  const setName = match.params.setname; //세트 이름

  //세트 아이템에서의 아이템 위치를 찾아낸다.
  const index = SetItemTexts[setName].findIndex(
    setItem => setItem.name === itemName
  );

  const name = SetItemTexts[setName][index].name
    .split(" ")
    .join("")
    .toLowerCase(); //사진 불러오기 위한 아이템 이름
  const information = SetItemTexts[setName][index].information.split(". "); //아이템 설명

  return (
    <div>
      <img
        src={`/img/${setName}/${name}.png`}
        alt={itemName}
        width={200}
        height={200}
      />
      <div>{setName}세트 아이템 중 하나이다.</div>
      <div>
        {information.map(info => (
          <div>{info}.</div>
        ))}
      </div>
    </div>
  );
};

export default ItemExplanation;
