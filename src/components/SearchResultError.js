import React from "react";
import { Result, Typography } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorForm = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  .ant-result-error {
    width: 700px;
  }
`;
const SearchResultError = ({ searchItem }) => {
  const { Paragraph, Text } = Typography;
  return (
    <ErrorForm>
      <Result
        status="error"
        title={`"${searchItem}" 검색결과가 없습니다.`}
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
            <BulbOutlined className="site-result-demo-error-icon" />
            세트 아이템이 잘 정리되어 있는{" "}
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
