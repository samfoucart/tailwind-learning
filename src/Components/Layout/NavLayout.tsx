import { Outlet } from "react-router";
import { Nav } from "../NavBar/Nav";

export function NavLayout() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}
