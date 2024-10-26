import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import JoinTheWaitlist from "./pages/JoinTheWaitlist";
import AppLayout from "./ui/AppLayout";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
