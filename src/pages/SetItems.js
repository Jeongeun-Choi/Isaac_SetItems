import React from "react";
import Item from "../components/Item";
import { Row, Col } from "antd";
import styled from "styled-components";

const SetItems = () => {
  const sets = [
    "adult",
    "beelzebub",
    "bob",
    "bookworm",
    "conjoined",
    "funguy",
    "guppy",
    "leviathan",
    "yesmother",
    "ohcrap",
    "seraphim",
    "spiderbaby",
    "spun",
    "stompy",
    "superbum"
  ];

  return (
    <Row>
      {sets.map(set => (
        <>
          <Col xs={24} md={{ span: 9, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <Item key={set} name={set} />
          </Col>
        </>
      ))}
    </Row>
  );
};

export default SetItems;
