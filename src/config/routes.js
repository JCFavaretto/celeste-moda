// Layouts
import LayoutBasic from "layouts/LayoutBasic";

// Pages
import Home from "pages/Home";
import Error404 from "pages/Error404";
import Products from "pages/Products";

const routes = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/products",
        component: Products,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
