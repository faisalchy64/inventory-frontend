import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="flex relative">
        <Sidebar />
        <div className="w-full h-[calc(100vh-64.8px)] md:h-[calc(100vh-68.8px)]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
