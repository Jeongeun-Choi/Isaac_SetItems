import React from "react";
import Item from "../components/Item";
import { ItemTexts } from "../texts/Text";
import { Row, Col } from "antd";
import styled from "styled-components";
import SearchResultError from "../components/SearchResultError";

const ResultForm = styled.div`
  margin-top: 40px;

  .itemForm {
    display: flex;
    justify-content: center;
  }
`;
const SearchResult = ({ match }) => {
  const searchitem = match.params.searchitem.toLowerCase();

  const searchItems = ItemTexts.filter(item =>
    item.name.toLowerCase().includes(searchitem)
  );

  return (
    <ResultForm>
      {searchItems.length === 0 ? (
        <SearchResultError searchItem={match.params.searchitem} />
      ) : (
        <Row>
          {searchItems.map(item => (
            <Col xs={24} md={12} lg={8}>
              <div className="itemForm">
                <Item data={item} setName={item.setitem} />
              </div>
            </Col>
          ))}
        </Row>
      )}
    </ResultForm>
  );
};

export default SearchResult;
