//아이템 설명
import React from "react";
import { ItemTexts } from "../texts/Text";
import SetItem from "../components/SetItem";
import { Row, Col } from "antd";

const ItemExplanation = ({ match }) => {
  const itemName = match.params.name; //이전 페이지에서 받아온 아이템 이름
  const setName = match.params.setname; //이전 페이지에서 받아온 세트 이름

  //세트 아이템에서의 아이템 위치를 찾아낸다.
  const index = ItemTexts.findIndex(setItem => setItem.name === itemName);

  const name = ItemTexts[index].name
    .split(" ")
    .join("")
    .toLowerCase(); //사진 불러오기 위한 아이템 이름
  const information = ItemTexts[index].information.split(". "); //아이템 설명
  const setItemName = ItemTexts[index].setitem;

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
      <h1>관련 세트 아이템</h1>
      <Row>
        {typeof setItemName === "string" ? (
          <Col xs={24} md={{ span: 9, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <SetItem name={setName} />
          </Col>
        ) : (
          setItemName.map(setName => (
            <Col
              xs={24}
              md={{ span: 9, offset: 3 }}
              lg={{ span: 5, offset: 3 }}
            >
              <SetItem name={setName} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ItemExplanation;
