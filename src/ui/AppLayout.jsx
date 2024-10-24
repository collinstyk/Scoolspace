import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <main className="bg-blue-white w-[1440px] font-circular-std">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
