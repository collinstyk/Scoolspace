import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <main className="h-screen w-screen bg-white font-plus-jakarta-sans">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default AppLayout;
