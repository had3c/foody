import { Outlet } from "react-router-dom";
import SideBar from "../pages/common/components/SideBar/SideBar";
import style from '../pages/common/style/UserLayout.module.css'

export default function UserLayout() {
  return (
    <div className={style.userLayout}>
     <SideBar/>

      <Outlet />
    </div>
  );
}
