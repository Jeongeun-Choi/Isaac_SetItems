import React from "react";
import Item from "../components/Item";
import { ItemTexts } from "../texts/Text";
import { Row, Col } from "antd";

const Items = () => {
  return (
    <div>
      <Row>
        {ItemTexts.map(item => (
          <>
            <Col
              xs={24}
              md={{ span: 9, offset: 3 }}
              lg={{ span: 5, offset: 3 }}
            >
              <Item key={item.id} data={item} />
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Items;
