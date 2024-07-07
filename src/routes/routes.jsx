import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Order from "../pages/Profile/Order/Order";
import FAQs from "../pages/FAQs/FAQs";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import NotFound from "../pages/NotFound/NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import Basket from "../pages/Profile/Basket/Basket";
import Checkout from "../pages/Profile/Checkout/Checkout";
import Restaurants from "../pages/Restaurants/Restaurants";
import RestaurantDetail from "../pages/RestaurantDetail/RestaurantDetail";

import HomeLayout from "../layout/HomeLayout";
import UserLayout from "../layout/UserLayout";

import mappedAuthRoutes from "../utils/authedRoutes";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/user",
        element: <UserLayout />,
        auth: true,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Order />,
          },
          {
            path: "basket",
            element: <Basket />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default mappedAuthRoutes(routes);
