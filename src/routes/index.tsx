import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "../domain/Home/pages";
import { Cart } from "../domain/Cart/pages";
import { OrderConfirmation } from "../domain/Order/pages";
import { Layout } from "../layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/*',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmation />
      }
    ]
  },
]);