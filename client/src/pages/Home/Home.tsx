import { Row } from "antd/lib/grid";
import Pagination from "antd/lib/pagination";
import React from "react";
import Product from "./components/Product";

const Home = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Product
          title="TEST"
          span={6}
          price={10000}
          imageUrl="https://cdn-mart.baemin.com/goods/34/%EC%97%B0%EC%96%B4_02_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
          loading={false}
        />
      </Row>
      <div className="mt-4 flex justify-center">
        <Pagination />
      </div>
    </>
  );
};

export default Home;
