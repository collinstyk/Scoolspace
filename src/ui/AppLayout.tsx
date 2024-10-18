import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <main className="font-circular-std">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
