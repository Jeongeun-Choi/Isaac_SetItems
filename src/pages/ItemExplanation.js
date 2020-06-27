//아이템 설명
import React from "react";
import { ItemTexts } from "../texts/Text";
import SetItem from "../components/SetItem";
import { Row, Col } from "antd";
import styled from "styled-components";

const ItemForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .itemInfoFlex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .itemInfoForm {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .itemInfoTop {
        font-size: 35px;
        font-weight: bold;
        text-align: left;
      }

      .itemInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
        font-size: 20px;
        margin-left: 30px;
      }
    }
  }
  h1 {
    margin-top: 60px;
    font-weight: bold;
  }
  .relationSetItem {
    width: 90%;
  }
`;

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
    <ItemForm>
      <div>
        <img
          src={`/img/${setName}/${name}.png`}
          alt={itemName}
          width={200}
          height={200}
        />
      </div>
      <div className="itemInfoFlex">
        <div className="itemInfoForm">
          <div className="itemInfoTop">소속 세트</div>
          <div className="itemInfo">{setName}세트 아이템 중 하나이다.</div>
        </div>

        <div className="itemInfoForm">
          <div className="itemInfoTop">아이템 설명</div>
          <div className="itemInfo">
            {information.map(info => (
              <div>{info}.</div>
            ))}
          </div>
        </div>
      </div>
      <h1>관련 세트 아이템</h1>
      <div className="relationSetItem">
        <Row>
          {typeof setItemName === "string" ? (
            <Col
              xs={24}
              md={{ span: 9, offset: 3 }}
              lg={{ span: 5, offset: 3 }}
            >
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
    </ItemForm>
  );
};

export default ItemExplanation;
