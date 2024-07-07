import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <h1>Sidebar</h1>

      <Outlet />
    </div>
  );
}
