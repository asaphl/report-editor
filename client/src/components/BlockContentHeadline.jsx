import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading } from "@fortawesome/free-solid-svg-icons";

function BlockContentHeadline(props) {
  if (!props.data.type) return <FontAwesomeIcon icon={faHeading} />;
  return <h1>{props.data.content}</h1>;
}

export default BlockContentHeadline;
