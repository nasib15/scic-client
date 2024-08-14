import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
