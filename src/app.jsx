import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      }, 
      {
        path:"about",
        element:<AboutPage/>
      },{
        path:"contact",
        element:<ContactPage/>
      }
    ],
  },
]);
export function App() {
  return <RouterProvider router={router} />;
}
