import { useState } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export function Nav() {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    return (
        <>
            <div className="sticky top-0 z-30 h-full">
                <NavBar sideBarButtonClick={() => setSideBarVisible(!sideBarVisible)}></NavBar>
                <SideBar setSideBarVisible={setSideBarVisible} sideBarVisible={sideBarVisible}></SideBar>
            </div>
        </>
    )
}