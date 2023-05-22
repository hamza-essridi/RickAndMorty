import React from "react";
import "./BackgroundImagePage.css";

const BackgroundImagePage = (props) => {
  return <div className="bg" >{props.children}</div>;
};

export default BackgroundImagePage;