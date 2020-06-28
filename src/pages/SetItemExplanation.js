//세트 아이템 설명
import React from "react";
import { ItemTexts } from "../texts/Text";
import styled from "styled-components";
import Item from "../components/Item";
import { Row, Col } from "antd";

const ExplanationForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  text-align: center;

  .setitemInfoForm {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .setitemInfoTop {
      font-size: 35px;
      font-weight: bold;
    }

    .setitemInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
      font-size: 20px;
      margin-left: 30px;
    }
  }

  h1 {
    font-weight: bold;
    margin-top: 40px;
  }

  .itemForm {
    display: flex;
    justify-content: center;
  }
`;

const SetItemExplanation = ({ match }) => {
  const name = match.params.setname;

  const index = ItemTexts.findIndex(setItem => setItem.setitem.includes(name));
  const setInformation = ItemTexts[index].information.split(". ");
  const setItems = ItemTexts.filter(item => item.setitem.includes(name));

  return (
    <ExplanationForm>
      <div>
        <img
          alt={name}
          src={`/img/${name}/${name}.png`}
          width={150}
          height={170}
        />
      </div>
      <div className="setitemInfoForm">
        <div className="setitemInfoTop">세트 효과</div>
        <div className="setitemInfo">
          {setInformation.map(info => (
            <div>{info}.</div>
          ))}
        </div>
      </div>
      <h1>관련 아이템</h1>
      <Row>
        {setItems.map(item => (
          <Col xs={24} md={12} lg={8}>
            <div className="itemForm">
              <Item data={item} key={item.id} setName={name} />
            </div>
          </Col>
        ))}
      </Row>
    </ExplanationForm>
  );
};

export default SetItemExplanation;
