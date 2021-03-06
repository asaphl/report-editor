import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BlockContentImage(props) {
  const { type, path, caption, credit } = props.data;
  if (!type) return <FontAwesomeIcon icon={faImage} />;

  return (
    <React.Fragment>
      <img src={path} alt={caption} width="100%" />
      <sub>{caption}</sub>
      <sub dangerouslySetInnerHTML={{ __html: `. ${credit}` }} />
    </React.Fragment>
  );
}

export default BlockContentImage;
