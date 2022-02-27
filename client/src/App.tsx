import Button from "antd/lib/button";
import Layout from "antd/lib/layout";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";

function App() {
  return (
    <Layout>
      <Header className="flex items-center justify-between bg-cyan-500  py-10 text-white">
        <div className="text-4xl font-semibold">CLEAN CODE SHOP</div>
        <div className="text-3xl ">
          <button className="font-semibold">장바구니</button>
          <button className="ml-4 font-semibold">주문목록</button>
        </div>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
