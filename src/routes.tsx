import { Login } from "./pages/2_login";
import { Register } from "./pages/1_register";
import { Dashboard } from "./pages/dashboard";
import { AddProduct } from "./pages/addProduct";
import { AllProducts } from "./pages/allProducts";

export const routes = [
  { path: "/", component: <AllProducts /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/add-product", component: <AddProduct /> },
];
