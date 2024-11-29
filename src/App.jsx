import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import JoinTheWaitlist from "./pages/JoinTheWaitlist";
import AppLayout from "./ui/AppLayout";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";
import ScrollToTop from "./utils/ScrollToTop";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    children: [
      {
        element: <Landing />,
        path: "/",
      },
      {
        element: <Product />,
        path: "/product",
      },
    ],
  },
  {
    element: (
      <>
        <ScrollToTop />
        <JoinTheWaitlist />
      </>
    ),
    path: "/waitlist",
  },
  {
    element: (
      <>
        <ScrollToTop />
        <ContactUs />
      </>
    ),
    path: "/contact-us",
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
