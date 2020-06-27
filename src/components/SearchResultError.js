import React from "react";
import { Result, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorForm = styled.div`
  display: flex;
  justify-content: center;
  .ant-result-error {
    width: 700px;
  }
`;
const SearchResultError = () => {
  const { Paragraph, Text } = Typography;
  return (
    <ErrorForm>
      <Result
        status="error"
        title="검색결과가 없습니다."
        subTitle="다시 한 번 검색해 주세요!"
      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
                width: 100
              }}
            >
              세트 아이템들이 궁금하다면? :
            </Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined className="site-result-demo-error-icon" /> Your
            account has been frozen.{" "}
            <Link to={`/setitems`}>
              <a>세트 아이템 보러가기 &gt;</a>
            </Link>
          </Paragraph>
        </div>
      </Result>
    </ErrorForm>
  );
};

export default SearchResultError;
