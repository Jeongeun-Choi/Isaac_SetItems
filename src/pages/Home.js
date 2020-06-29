import React from "react";
import styled from "styled-components";

const HomeForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  .menuInfo {
    list-style: none;
  }

  .menuDetailInfo {
    list-style: disc;
  }
  h1 {
    font-size: 35px;
    font-weight: bold;
  }

  h2 {
    font-size: 30px;
    color: #4f4f4f;
  }
  li {
    font-size: 25px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }
`;

const Home = () => {
  return (
    <HomeForm>
      <ul className="menuInfo">
        <h1>아이작 세트 아이템 도감 사용법</h1>
        <h2>메뉴 설명</h2>
        <ul className="menuDetailInfo">
          <li>SetItems</li>
          <div>
            <p>
              세트 아이템들의 목록을 보여준다. 해당 세트 아이템을 클릭하면 그
              세트 템의 설명 페이지로 넘어간다.
            </p>
            <p>
              세트 효과, 그와 관련된 아이템들의 목록이 화면에 나타난다. 아이템을
              클릭시 해당 아이템의 설명 페이지로 넘어간다.
            </p>
            <p>
              소속 세트, 아이템 설명, 관련 세트 아이템들의 목록이 화면에
              나타난다.
            </p>
          </div>
          <li>SearchItems</li>
          <p>찾고자 하는 아이템을 검색할 수 있다.</p>
        </ul>
      </ul>
    </HomeForm>
  );
};

export default Home;
