export interface SideBarButtonProps {
  sidebarButtonClick: () => void;
}

export function SideBarButton(props: SideBarButtonProps) {
  return (
    <>
      <div>
        <button
          type="button"
          className="lg:hidden block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          onClick={props.sidebarButtonClick}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
