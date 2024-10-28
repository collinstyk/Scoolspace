import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <main className="w-screen bg-white">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
