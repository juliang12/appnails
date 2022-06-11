import Header from "components/header/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#FDEFF4" }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
