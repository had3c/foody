import HomeLayout from "../layout/HomeLayout";
import UserLayout from "../layout/UserLayout";
import NotFound from "../pages/NotFound/NotFound";

import mappedAuthRoutes from "../utils/authedRoutes";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Order = lazy(() => import("../pages/Profile/Order/Order"));
const FAQs = lazy(() => import("../pages/FAQs/FAQs"));
const HowItWorks = lazy(() => import("../pages/HowItWorks/HowItWorks"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Basket = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/Profile/Basket/Basket")), 2000)
    )
);
const Checkout = lazy(() => import("../pages/Profile/Checkout/Checkout"));
const Restaurants = lazy(() => import("../pages/Restaurants/Restaurants"));
const RestaurantDetail = lazy(() =>
  import("../pages/RestaurantDetail/RestaurantDetail")
);

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
    element: (
      <Suspense fallback={<div></div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default mappedAuthRoutes(routes);
