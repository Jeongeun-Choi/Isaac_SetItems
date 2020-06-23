//세트 아이템 설명
import React from "react";
import { SetItemTexts, SetItemExplanationTexts } from "../texts/ItemTexts";
import { ItemTexts } from "../texts/Text";
import styled from "styled-components";
import RelationItems from "../components/RelationItems";
import { Row, Col } from "antd";

const ExplanationForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .textForm {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
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
      <div className="textForm">
        {setInformation.map(info => (
          <div>{info}.</div>
        ))}
      </div>
      <h1>관련 아이템</h1>
      <Row>
        {setItems.map(item => (
          <Col xs={24} md={{ span: 9, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <RelationItems data={item} key={item.id} setName={name} />
          </Col>
        ))}
      </Row>
    </ExplanationForm>
  );
};

export default SetItemExplanation;
