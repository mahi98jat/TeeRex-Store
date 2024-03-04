import React, { FC } from "react";
import "./Link.css";

const Link: FC<{
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  url?: string;
  icon?: string;
}> = ({ text, onClick, url, icon }) => {
  return (
    <a className="anchor-element" href={url} onClick={onClick}>
      {text}
    </a>
  );
};

export default Link;
