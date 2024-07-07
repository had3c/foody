import { Outlet } from "react-router-dom";
export default function HomeLayout() {
  return (
    <div>
      <h1>Header</h1>

      <br />
      <br />
      <br />
      <br />

      <Outlet />

      <br />
      <br />
      <br />
      <br />

      <h1>Footer</h1>
    </div>
  );
}
