import { useEffect, useRef, useState } from "react";

export default function DarkModeMenu() {
  const [isDarkMenuOpen, setIsDarkMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current != null &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsDarkMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={menuRef} className="hidden lg:block">
        <button
          type="button"
          className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          onClick={() => setIsDarkMenuOpen(!isDarkMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m480-260 60-60h100v-100l60-60-60-60v-100H540l-60-60-60 60H320v100l-60 60 60 60v100h100l60 60Zm0-100v-240q50 0 85 35t35 85q0 50-35 85t-85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
          </svg>
        </button>
        <div className="relative">
          {isDarkMenuOpen && (
            <div className="absolute top-6 right-0 min-h-64 min-w-64 rounded-xl dark:border-slate-800 border shadow-2xl bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur flex flex-col">
              <div className="flex flex-col p-4">
                <h1 className="text-left text-lg font-serif dark:text-slate-200 text-slate-900">
                  Turn Dark Mode On/Off
                </h1>
              </div>
              <div className="h-0 w-full border-b dark:border-slate-800"></div>

              <div className="flex flex-col items-center justify-center grow h-full w-full">
                <label className="inline-flex items-center mb-5 cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  ></input>
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
