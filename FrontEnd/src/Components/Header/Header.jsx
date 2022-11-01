// eslint-disable-next-line
import React, { useRef, useState } from "react";
import "./Header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import octopuss from "../../Assets/VoomioImages/octopuss.svg";
import magnifyGlass from "../../Assets/VoomioImages/magnifying-glass.svg";
import MenuAlt3Outline from "../../Assets/VoomioImages/MenuAlt3Outline.svg";
import close from "../../Assets/VoomioImages/X.svg";

import { Link } from "react-router-dom";
let Buffer = require("buffer/").Buffer;

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobilemenu, setOpenMobilemenu] = useState(false);
  const [searchbtn, setSearchbtn] = useState(false);
  const [namiwallet, setNami] = useState(false);
  const [eternlwallet, setEternl] = useState(false);
  const [isModel, setIsModel] = useState(false);
  const ref = useRef();
  useEffect(() => {
    pollWallets();
    window.scrollTo(0, 0);
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && !ref.current.contains(e.target)) {
        setIsModel(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line
  }, [isModel]);
  // Dropdown

  // Model
  const openModel = () => {
    setIsModel(!isModel);
  };
  // connect wallet
  const signhash = async (API) => {
    try {
      if (API === "nami") {
        var message = Buffer.from(
          "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d Let me Trade",
          "utf8"
        ).toString("hex");
        var api = await window.cardano.nami.enable();
        var paymentAddr = await api.getChangeAddress();
        if (JSON.parse(localStorage.getItem("wallet")) == null) {
          var result = await api.signData(paymentAddr, message);
          localStorage.setItem(
            "wallet",
            JSON.stringify({ wallet: "nami", token: result })
          );
        }
        toast.success("Login successful!");
      } else if (API === "eternl") {
        var message = Buffer.from(
          "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d Let me Trade",
          "utf8"
        ).toString("hex");
        var api = await window.cardano.eternl.enable();
        var paymentAddr = await api.getRewardAddresses();
        if (JSON.parse(localStorage.getItem("wallet")) == null) {
          var result = await api.signData(paymentAddr, message);
          localStorage.setItem(
            "wallet",
            JSON.stringify({ wallet: "eternl", token: result })
          );
          toast.success("Login successful!");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("User decline the request!");
    }
  };

  const pollWallets = () => {
    const wallets = [];
    for (const key in window.cardano) {
      if (window.cardano[key].enable && wallets.indexOf(key) === -1) {
        wallets.push(key);
      }
    }
    if (wallets.indexOf("nami") !== -1) {
      setNami(true);
    }
    if (wallets.indexOf("eternl") !== -1) {
      setEternl(true);
    }
  };

  const nami_connect = () => {
    signhash("nami");
  };

  const eternl_connect = () => {
    signhash("eternl");
  };

  return (
    <>
      {/* Header */}
      <nav
        className={`${
          openMobilemenu
            ? " bg-purple-100 text-[#250C50] py-3 drop-shadow-2xl"
            : searchbtn
            ? "bg-white py-3 drop-shadow-2xl"
            : " bg-[#250C50]  text-white py-3 drop-shadow-2xl "
        }`}
      >
        <div className="container mx-auto flex lg:justify-center justify-between items-center  md:gap-2 lg:gap-10 lg:p-0 px-5">
          <div className="flex justify-between items-center cursor-pointer ">
            <div className="flex items-center gap-4 zoom-in">
              <img src={octopuss} alt="" />
              <h2 className="font-bold text-2xl ">VOOMIO</h2>
            </div>
          </div>
          <div className="lg:hidden flex items-center gap-3 ">
            <img
              src={magnifyGlass}
              alt=""
              onClick={() => {
                setSearchbtn(true);
                setOpenMobilemenu(false);
              }}
              className={searchbtn ? "hidden " : "block "}
            />
            <img
              src={MenuAlt3Outline}
              alt=""
              onClick={() => setOpenMobilemenu(true)}
              className={openMobilemenu ? "hidden " : "block "}
            />
            {openMobilemenu || searchbtn ? (
              <img
                src={close}
                alt=""
                onClick={() => {
                  setOpenMobilemenu(false);
                  setSearchbtn(false);
                }}
              />
            ) : null}
          </div>
          <div className="border-2 border-[#6549F6] rounded-full bg-white p-3 justify-center items-center gap-2  lg:flex hidden ">
            <i className="fa-solid fa-magnifying-glass text-[#6549F6] cursor-pointer"></i>
            <input
              type="text"
              name=""
              className="border-0 border-white  outline-none text-black md:w-7 lg:w-20 xl:w-full"
              placeholder="Search for assets or collections..."
            />
            <div
              className="flex justify-center items-center gap-2 px-2 border-l-2 cursor-pointer relative"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <div className="text-[#000000] ">ETH</div>
              <i className="fa-solid fa-angle-down text-[#000000]"></i>
              {openDropdown ? (
                <>
                  <div className="border-2 border-[#6549F6] absolute top-11 rounded-md p-5 lg:flex hidden flex-col bg-white text-[#6549F6] gap-3 hover">
                    <div>ETH</div>
                    <div>SOL</div>
                    <div>ADA</div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className=" items-center lg:flex hidden gap-8 cursor-pointer font-apply ">
            <h1 className="font-bold ">Explore</h1>
            <h1 className="font-bold">Ranking</h1>
            <h1 className="font-bold">Create</h1>
            <button
              className="buttonborder menufont text-white font-bold py-3 lg:px-10 md:px-5"
              onClick={openModel}
            >
              Connect Wallet
            </button>
          </div>
        </div>
        {/* =================Mobile menu, show/hide based on menu state.============ */}
        {openMobilemenu && (
          <div className=" text-center text-[#250C50] bg-purple-100 h-[100vh]  pt-20   z w-[100%] items-center ">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              <a
                href="/upload-nft"
                className=" menufont block px-3 py-5 rounded-md text-base font-medium "
                aria-current="page"
              >
                Explore
              </a>
              <a
                href="/aggregator"
                className="menufont  block px-3 py-5 rounded-md text-base font-medium "
              >
                Ranking
              </a>
              <a
                href="/nftgenerator"
                className="menufont block px-3 py-5 rounded-md text-base font-medium"
              >
                Create
              </a>
              <button className="buttonborder menufont text-white font-bold py-2 px-12">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
        {/*============= search button ================*/}
        {searchbtn ? (
          <div className="text-left bg-white h-[100vh]  z-50 w-[100%] p-4 lg:hidden block">
            <div className="border-mobile-menu drop-shadow-sm flex justify-around ">
              <div className="flex items-center gap-4 p-3">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  name=""
                  className="outline-none w-28  "
                  placeholder="Search..."
                />
              </div>
              <div
                className="flex justify-center items-center border-l-2 gap-4 p-3 cursor-pointer relative"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <div className="text-[#000000] ">ETH</div>
                <i className="fa-solid fa-angle-down text-[#000000]"></i>
                {openDropdown ? (
                  <>
                    <div className="border-2 border-[#6549F6] absolute top-14 rounded-md p-5 flex  flex-col bg-white text-[#6549F6] gap-3 hover ">
                      <div>ETH</div>
                      <div>SOL</div>
                      <div>ADA</div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>

      {/* Popup */}

      {isModel ? (
        <div className="fixed backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0">
          <div
            className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-16 py-10 max-w-xl w-11/12 md:w-full"
            ref={ref}
          >
            <div className="text-center mb-7">
              <h1 className="text-blue-dark dark:text-gray-lightest mb-10 font-bold text-3xl">
                Select wallet
              </h1>
            </div>{" "}
            <button
              type="button"
              onClick={openModel}
              className="absolute text-2xl px-2.5 text-gray-dark top-3 right-3 hover:opacity-100 opacity-70"
            >
              <i className="fas fa-times" />
            </button>{" "}
            <div className="flex justify-center gap-7">
              {eternlwallet && (
                <div>
                  <button
                    type="button"
                    onClick={eternl_connect}
                    className="relative w-36 p-3 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-lg font-semibold dark:border-blue-darkest"
                  >
                    <img
                      src="/images/etrnal.png"
                      alt="eternl wallet"
                      className="w-16 h-16 p-2 mx-auto mb-2"
                    />
                    eternl
                    <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                      <i className="fas fa-link" />
                      enabled
                    </div>
                  </button>
                </div>
              )}
              {namiwallet && (
                <div>
                  <button
                    type="button"
                    onClick={nami_connect}
                    className="relative w-36 p-3 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-lg font-semibold border-blue-light"
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.17 499.86'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23349ea3;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath id='path16' className='cls-1' d='M73.87,52.15,62.11,40.07A23.93,23.93,0,0,1,41.9,61.87L54,73.09,486.17,476ZM102.4,168.93V409.47a23.76,23.76,0,0,1,32.13-2.14V245.94L395,499.86h44.87Zm303.36-55.58a23.84,23.84,0,0,1-16.64-6.68v162.8L133.46,15.57H84L421.28,345.79V107.6A23.72,23.72,0,0,1,405.76,113.35Z'/%3E%3Cpath id='path18' className='cls-1' d='M38.27,0A38.25,38.25,0,1,0,76.49,38.27v0A38.28,38.28,0,0,0,38.27,0ZM41.9,61.8a22,22,0,0,1-3.63.28A23.94,23.94,0,1,1,62.18,38.13V40A23.94,23.94,0,0,1,41.9,61.8Z'/%3E%3Cpath id='path20' className='cls-1' d='M405.76,51.2a38.24,38.24,0,0,0,0,76.46,37.57,37.57,0,0,0,15.52-3.3A38.22,38.22,0,0,0,405.76,51.2Zm15.52,56.4a23.91,23.91,0,1,1,8.39-18.18A23.91,23.91,0,0,1,421.28,107.6Z'/%3E%3Cpath id='path22' className='cls-1' d='M134.58,390.81A38.25,38.25,0,1,0,157.92,426a38.24,38.24,0,0,0-23.34-35.22Zm-15,59.13A23.91,23.91,0,1,1,143.54,426a23.9,23.9,0,0,1-23.94,23.91Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                      alt="Nami wallet"
                      className="w-16 h-16 p-2 mx-auto mb-2"
                    />
                    Nami
                    <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                      <i className="fas fa-link" />
                      enabled
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
