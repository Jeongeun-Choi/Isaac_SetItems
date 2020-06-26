import React from "react";
import Item from "../components/Item";
import { ItemTexts } from "../texts/Text";
import { Row, Col, Result, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ResultForm = styled.div`
  margin-top: 40px;
`;
const SearchResult = ({ match }) => {
  const { Paragraph, Text } = Typography;
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
  console.log(searchItems);
  return (
    <ResultForm>
      {searchItems.length === 0 ? (
        <Result
          status="error"
          title="검색결과가 없습니다."
          subTitle="다른 아이템을 검색해 보세요!"
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16
                }}
              >
                The content you submitted has the following error:
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              Your account has been frozen. <a>Thaw immediately &gt;</a>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              Your account is not yet eligible to apply.{" "}
              <a>Apply Unlock &gt;</a>
            </Paragraph>
          </div>
        </Result>
      ) : (
        <Row>
          {searchItems.map(item => (
            <Col
              xs={24}
              md={{ span: 9, offset: 3 }}
              lg={{ span: 5, offset: 3 }}
            >
              <Item data={item} setName={item.setitem} />
            </Col>
          ))}
        </Row>
      )}
    </ResultForm>
  );
};

export default SearchResult;
