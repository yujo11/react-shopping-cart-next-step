import { Header as AntdHeader } from "antd/lib/layout/layout";
import React from "react";

const index = () => {
  return (
    <AntdHeader className="flex items-center justify-between bg-cyan-500  py-10 text-white">
      <div className="text-4xl font-semibold">CLEAN CODE SHOP</div>
      <div className="text-3xl ">
        <button className="font-semibold">장바구니</button>
        <button className="ml-4 font-semibold">주문목록</button>
      </div>
    </AntdHeader>
  );
};

export default index;
