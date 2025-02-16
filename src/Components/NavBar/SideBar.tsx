export interface SideBarProps {
    sideBarVisible: boolean,
    setSideBarVisible: (sideBarVisible: boolean) => void,
}

export function SideBar(props: SideBarProps) {
    return (
        <>
            { props.sideBarVisible && (
                <div className="absolute h-[calc(100dvh-100%)] w-full bg-slate-100/40 dark:bg-slate-900/10 backdrop-blur shadow-2xl dark:border-slate-800 py-2 px-12 no-doc-scroll">
                    <div className="flex-grow">
                        <h1 className="text-green-700">AAAAAAAAA</h1>
                    </div>
                    
                </div>
            )}
        </>
    );
}