import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import Card from "antd/lib/card";
import Col from "antd/lib/grid/col";
import Skeleton from "antd/lib/skeleton";
import React from "react";

interface Props {
  span: number;
  imageUrl: string;
  title: string;
  price: number;
  loading: boolean;
}

const Product = ({ span, imageUrl, title, price, loading }: Props) => {
  return (
    <Col span={span}>
      <Skeleton loading={loading} active>
        <Card
          cover={<img alt={title} src={imageUrl} />}
          style={{ width: 240 }}
          hoverable
        >
          <div className="flex items-center justify-between">
            <div>
              <Card.Meta title={title} />
              <Card.Meta title={price.toLocaleString()} />
            </div>
            <button>
              <ShoppingCartOutlined className="text-2xl" />
            </button>
          </div>
        </Card>
      </Skeleton>
    </Col>
  );
};

export default Product;
