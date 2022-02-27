import Layout from "antd/lib/layout";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <BrowserRouter>
          <Routes>
            {ROUTES.map(({ path, component }) => (
              <Route path={path} key={path} element={component} />
            ))}
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
