import React from "react";
import "./socialLink.scss";

function SocialLink(props) {
  return <a className="social-Link" target="_blank" href={props.link}>{props.children}</a>;
}

export default SocialLink;
