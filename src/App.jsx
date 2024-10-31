import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import JoinTheWaitlist from "./pages/JoinTheWaitlist";
import AppLayout from "./ui/AppLayout";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Landing />,
        path: "/",
      },
    ],
  },
  {
    element: <JoinTheWaitlist />,
    path: "/waitlist",
  },
  {
    element: <ContactUs />,
    path: "/contact-us",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
