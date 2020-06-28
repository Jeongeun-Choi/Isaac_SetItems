import React from "react";
import SetItem from "../components/SetItem";
import { Row, Col } from "antd";

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
          <Col xs={24} md={12} lg={8}>
            <SetItem key={set} name={set} />
          </Col>
        </>
      ))}
    </Row>
  );
};

export default SetItems;
