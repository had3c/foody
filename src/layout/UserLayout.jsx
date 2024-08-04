import { Outlet } from "react-router-dom";
import SideBar from "../pages/common/components/SideBar/SideBar";
import style from "../pages/common/style/UserLayout.module.css";
import { Suspense } from "react";

export default function UserLayout() {
  return (
    <div className={style.userLayout}>
      <SideBar />

      <Suspense
        fallback={
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
          ></div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
