import React, { useState } from "react";

const DropDown = ({ title, item1, item2, item3, All }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <>
      <div className="text-left mb-10">
        <div className="dropdownborder rounded-2xl">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50 text-[#6549F6]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={openDropdown}
          >
            {title}
            {/* Heroicon name: solid/chevron-down */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isDropdown ? (
          <div
            className="origin-top-right z-50 absolute  mt-2 w-36 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1 text-[#6549F6]" role="none">
              <a
                href="/"
                className="menufont block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {item1}
              </a>
              <a
                href="/"
                className="menufont block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                {item2}
              </a>
              <a
                href="/"
                className="menufont block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                {item3}
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="menufont block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                >
                  {All}
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DropDown;
