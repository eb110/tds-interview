import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import TestPage from "../../features/Test/TestPage";
import ContactPage from "../../features/Contact/ContactPage";
import HomePage from "../../features/Home/HomePage";
import Converter from "../../features/CurrencyConverter/Converter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/test", element: <TestPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/converter", element: <Converter /> },
    ],
  },
]);
