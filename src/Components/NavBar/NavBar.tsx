import DarkModeMenu from './DarkModeMenu'
import GitHubButton from './GitHubButton'
import './NameHeading.css'
import { SideBarButton } from './SideBarButton'
// import GitHubMark from '../../assets/github-mark/github-mark-white.svg'

export interface NavBarProps {
    sideBarButtonClick: () => void,
}

export function NavBar(props: NavBarProps): JSX.Element {
    

    return (
        <nav className=" bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur shadow-lg min-h-14 border-b dark:border-slate-800 flex flex-row py-2 px-12 justify-center items-center">
            <div className="flex flex-row flex-grow justify-between items-center lg:max-w-screen-xl">
                <h1 className="text-slate-900 dark:text-slate-200 text-2xl font-bold sticky top-0 font-serif">Sam Foucart</h1>
                <div className="flex flex-row items-center gap-6">
                    <GitHubButton></GitHubButton>
                    <DarkModeMenu></DarkModeMenu>
                    <SideBarButton sidebarButtonClick={props.sideBarButtonClick}></SideBarButton>
                    {/* <button type="button" id="headlessui-listbox-button-:r5:" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" aria-labelledby="headlessui-label-:r4: headlessui-listbox-button-:r5:">
                        <span className="dark:hidden">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400 dark:stroke-slate-500"></path>
                                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 dark:stroke-slate-500"></path>
                            </svg>
                        </span>
                        <span className="hidden dark:inline">
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path>
                                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400 dark:fill-slate-500"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400 dark:fill-slate-500"></path>
                            </svg>
                        </span>
                    </button>
                    <button type="button" className="text-slate-500 w-6 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                        <span className="sr-only">Navigation</span>
                        <svg width="24" height="24" fill="none" aria-hidden="true">
                            <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button> */}
                </div>
            </div>
        </nav>
    )
}