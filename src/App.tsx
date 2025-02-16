import { Content } from "./Components/Content";
import { Nav } from "./Components/NavBar/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
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
