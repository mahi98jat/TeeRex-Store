import React, { FC } from "react";

const Typography: FC<{
  text: string;
  className?: string;
  weight?: number;
  color?: string;
}> = ({ text, className, color, weight }) => {
  const typoClass = `basic ${className}`;
  return (
    <p
      className={typoClass.trim()}
      style={{ color: `${color}`, fontWeight: `${weight}` }}
    >
      {text}
    </p>
  );
};

export default Typography;
