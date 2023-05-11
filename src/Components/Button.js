import React from "react";
import { Link, To } from "react-router-dom";

export default function Button(props) {
  const {
    btnText,
    text,
    to,
    className,
    color,
    onClick,
    borderColor,
    width,
    padding,
    height,
    ...rest
  } = props;
  const renderContent = (
    <div>{text && <span className={`${btnText || ""}`}>{text}</span>}</div>
  );

  const attributes = {
    style: {
      borderColor: `${borderColor || ""}`,
      borderWidth: "1px",
      background: "transparent",
      width: `${width || "150" + "px"}`,
      height: `${height || "35" + "px"}`,
    },
    className: ` ${color || ""} ${padding || ""}  ${className || ""}  ${
      !text ? "only-icon-button" : ""
    } button`,
  };

  return (
    <div>
      <button onClick={onClick} {...rest} type="button" {...attributes}>
        {renderContent}
      </button>
    </div>
  );
}
