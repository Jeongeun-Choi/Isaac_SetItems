import React from "react";
import { SetItemTexts } from "../texts/ItemTexts";
import styled from "styled-components";
import RelationItems from "../components/RelationItems";
import { Row, Col } from "antd";

const ExplanationForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemExplanation = ({ match }) => {
  const name = match.params.setname;

  return (
    <ExplanationForm>
      <div>
        <img alt={name} src={`/img/${name}/${name}.png`} />
      </div>
      <div>아무튼 설명임 설명 으아아아아ㅏㅇㅇ아아ㅏ</div>
      <h1>관련 아이템</h1>
      <Row justify="center" align="middle">
        {SetItemTexts[name].map(item => (
          <Col xs={24} md={{ span: 9, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <RelationItems data={item} key={item.id} setName={name} />
          </Col>
        ))}
      </Row>
    </ExplanationForm>
  );
};

export default ItemExplanation;
