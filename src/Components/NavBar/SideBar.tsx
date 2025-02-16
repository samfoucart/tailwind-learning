import { useEffect, useRef } from "react";

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
                    <div className="flex flex-col gap-4 bg-slate-100/80 dark:bg-slate-900/80 h-full w-72 border-r dark:border-slate-800 px-12 py-6" ref={menuRef}>
                        <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50" href="#">Home</a>
                        <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50" href="#">Blog</a>
                        <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50" href="#">About</a>
                        <a className="font-serif text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50" href="#">Résumé</a>
                    </div>
                </div>
            )}
        </>
    );
}