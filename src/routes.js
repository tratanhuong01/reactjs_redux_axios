import Index from "./pages/Index/Index";
import ListProduct from "./pages/ListProduct/ListProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
// import { Route } from "react-router";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Index />,
  },
  {
    path: "/products",
    exact: true,
    main: () => <ListProduct />,
  },
  {
    path: "/detail-product/:slug",
    exact: true,
    main: ({ match }) => <DetailProduct match={match} />,
  },
  {
    path: "/cart",
    exact: false,
    main: () => <Cart />,
  },
  {
    path: "/payment",
    exact: false,
    main: () => <Payment />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/news",
    exact: false,
    main: () => <News />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
