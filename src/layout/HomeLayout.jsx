import { Outlet } from "react-router-dom";
import Navbar from "../pages/common/components/Navbar/Navbar";
import Footer from "../pages/common/components/Footer/Footer";


export default function HomeLayout() {
  return (
    <div>
      <Navbar/>

      <Outlet />

      <Footer/>
    </div>
  );
}
