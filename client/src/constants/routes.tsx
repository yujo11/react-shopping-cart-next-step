import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";

interface Route {
  path: string;
  component: JSX.Element;
}

const ROUTES: Route[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/cart",
    component: <Cart />,
  },
  {
    path: "/order",
    component: <Order />,
  },
];

export default ROUTES;
