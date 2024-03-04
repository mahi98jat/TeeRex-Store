import React, { FC, ReactNode } from "react";
import "./Flex.css";

const Flex: FC<{
  children: ReactNode;
  justify?: "space-between" | "flex-start" | "flex-end";
}> = ({ children, justify }) => {
  return (
    <div className="flex" style={{ justifyContent: `${justify}` }}>
      {children}
    </div>
  );
};

export default Flex;
