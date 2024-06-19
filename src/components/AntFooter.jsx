import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function AntFooter() {
  return (
    <Footer className="custom-footer">
      Kostas Crafts @{new Date().getFullYear()} Created by Dachos
    </Footer>
  );
}

export default AntFooter;
