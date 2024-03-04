import React, { FC, ReactNode } from "react";

import "./AppStructure.css";

const AppStructure: FC<{
  navigation: ReactNode;
  filters: ReactNode;
  content: ReactNode;
}> = ({ navigation, filters, content }) => {
  return (
    <main className="app-container">
      <div className="navigation-container">{navigation}</div>
      <div className="application-body">
        <div>{filters}</div>
        <div>{content}</div>
      </div>
    </main>
  );
};

export default AppStructure;
