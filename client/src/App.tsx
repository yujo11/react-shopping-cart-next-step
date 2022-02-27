import Layout from "antd/lib/layout";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import PATH from "./constants/path";
import ROUTES from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header className="flex items-center justify-between bg-cyan-500  py-4 text-white">
          <Link to={PATH.HOME} className="text-4xl font-semibold">
            CLEAN CODE SHOP
          </Link>
          <div className="text-2xl ">
            <Link to={PATH.CART} className="font-semibold">
              장바구니
            </Link>
            <Link to={PATH.ORDER} className="ml-4 font-semibold">
              주문목록
            </Link>
          </div>
        </Header>
        <Content className="bg-white p-6">
          <Routes>
            {ROUTES.map(({ path, component }) => (
              <Route path={path} key={path} element={component} />
            ))}
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
