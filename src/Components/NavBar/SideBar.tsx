import { useEffect, useRef } from "react";
import GitHubButton from "./GitHubButton";

export interface SideBarProps {
    sideBarVisible: boolean,
    setSideBarVisible: (sideBarVisible: boolean) => void,
}

export function SideBar(props: SideBarProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const setSideBarVisible = props.setSideBarVisible;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current != null && !menuRef.current.contains(event.target as Node)) {
                setSideBarVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [setSideBarVisible]);

    return (
        <>
            { props.sideBarVisible && (
                <div className="absolute h-[calc(100dvh-100%)] w-full bg-slate-100/40 dark:bg-slate-900/10 backdrop-blur shadow-2xl dark:border-slate-800 no-doc-scroll">
                    <div className="flex flex-col h-full w-72 bg-slate-100/80 dark:bg-slate-900/80 border-r dark:border-slate-800 gap-4" ref={menuRef}>
                        <div className="flex flex-col gap-4 px-12 py-6">
                            <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400" href="#">Home</a>
                            <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400" href="#">Blog</a>
                            <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400" href="#">About</a>
                            <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400" href="#">Résumé</a>
                        </div>
                        <div className='h-0 w-full border-b dark:border-slate-800'></div>
                        <div className="flex flex-row justify-between gap-2 px-12">
                            <p className="text-lg font-serif">Dark Mode</p>
                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"></input>
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex flex-row justify-between gap-2 px-12">
                            <p className="text-lg font-serif">My GitHub Profile</p>
                            <GitHubButton></GitHubButton>
                        </div>
                       
                    </div>
                </div>
            )}
        </>
    );
}