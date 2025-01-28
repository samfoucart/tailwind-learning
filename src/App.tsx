import { useState } from "react";
import { NavBar } from "./Components/NavBar/NavBar"
import { SideBar } from "./Components/NavBar/SideBar";
import { Content } from "./Components/Content";

function App() {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-30 h-full">
        <NavBar sideBarButtonClick={() => setSideBarVisible(!sideBarVisible)}></NavBar>
        <SideBar setSideBarVisible={setSideBarVisible} sideBarVisible={sideBarVisible}></SideBar>
      </div>
      {/* <SideBar setSideBarVisible={setSideBarVisible} sideBarVisible={sideBarVisible}></SideBar> */}
      <Content></Content>
      {/* <div className="grid grid-cols-1 grid-rows-1 h-full w-full">
        <div className="col-[1] row-[1]">
          <Content></Content>
        </div>
      </div> */}
    </>
  )
}

export default App
