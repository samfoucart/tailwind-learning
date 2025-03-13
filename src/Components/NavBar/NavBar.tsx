import { NavLink } from "react-router";
import DarkModeMenu from "./DarkModeMenu";
import GitHubButton from "./GitHubButton";
import { SideBarButton } from "./SideBarButton";

export interface NavBarProps {
  sideBarVisble: boolean;
  sideBarButtonClick: () => void;
}

export function NavBar(props: NavBarProps): JSX.Element {
  return (
    <nav className=" bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur shadow-lg min-h-14 border-b dark:border-slate-800 flex flex-row py-2 px-8 justify-center items-center">
      <div className="flex flex-row flex-grow justify-between items-center lg:max-w-screen-xl">
        <NavLink to="/">
          <h1 className="text-slate-900 hover:text-slate-600 dark:text-slate-200 hover:dark:text-slate-50 text-2xl font-bold font-serif">
            Sam Foucart
          </h1>
        </NavLink>
        <NavLink to="/" className="hidden lg:block">
          <h1 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400">
            Home
          </h1>
        </NavLink>
        <NavLink to="/blog-posts" className="hidden lg:block">
          <h1 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400">
            Blog
          </h1>
        </NavLink>
        <NavLink to="/" className="hidden lg:block">
          <h1 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400">
            Projects
          </h1>
        </NavLink>
        <NavLink to="/" className="hidden lg:block">
          <h1 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400">
            Résumé
          </h1>
        </NavLink>
        <div className="flex flex-row items-center gap-6">
          <div className="hidden lg:block">
            <GitHubButton></GitHubButton>
          </div>
          <div className="hidden lg:block">
            <DarkModeMenu></DarkModeMenu>
          </div>
          <SideBarButton
            sidebarButtonClick={props.sideBarButtonClick}
          ></SideBarButton>
        </div>
      </div>
    </nav>
  );
}
