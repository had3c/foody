import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import LoadingSuspense from "../pages/common/components/LoadingSuspense/LoadingSuspense";
import Navbar from "../pages/common/components/Navbar/Navbar";
import Footer from "../pages/common/components/Footer/Footer";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<LoadingSuspense />}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
}
