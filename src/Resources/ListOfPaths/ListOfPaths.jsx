
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Login from "../../Pages/Login/Login";
import MainPage from "../../Pages/MainPage/MainPage";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Register from "../../Pages/Register/Register";

export const Paths = [
  {
    path: "/",
    component: <MainPage ActivePage={<LandingPage />} />,
  },

  {
    path: "/products/:id",
    component: <MainPage ActivePage={<ProductDetails />} />,
  },
  {
    path: "/cart",
    component: <MainPage ActivePage={<Cart />} />,
  },
  {
    path: "/addproduct",
    component: <MainPage ActivePage={<AddProduct />} />,
  },
  {
    path: "/checkout",
    component: <MainPage ActivePage={<Checkout />} />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <Register />,
  },
];
