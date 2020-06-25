import React from "react";
import RelationItems from "../components/RelationItems";
import { ItemTexts } from "../texts/Text";
import { Row, Col } from "antd";
import styled from "styled-components";

const ResultForm = styled.div`
  margin-top: 40px;
`;
const SearchResult = ({ match }) => {
  const searchitem = match.params.searchitem
    .split(" ")
    .join("")
    .toLowerCase();

  const searchItems = ItemTexts.filter(item =>
    item.name
      .split(" ")
      .join("")
      .toLowerCase()
      .includes(searchitem)
  );

  return (
    <ResultForm>
      <Row>
        {searchItems.map(item => (
          <Col xs={24} md={{ span: 9, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <RelationItems data={item} setName={item.setitem} />
          </Col>
        ))}
      </Row>
    </ResultForm>
  );
};

export default SearchResult;
