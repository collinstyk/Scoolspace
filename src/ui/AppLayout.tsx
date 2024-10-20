import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <main className="font-circular-std min-w-[1280px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
