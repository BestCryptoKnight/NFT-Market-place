// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Aos from "aos";
import Carousel from "react-elastic-carousel";
import onePlaceRight1 from "../../Assets/VoomioImages/one-place-left.svg";
import onePlaceRight2 from "../../Assets/VoomioImages/oneplaceright-1.svg";
import onePlaceleft1 from "../../Assets/VoomioImages/oneplaceCyberKongsleft.svg";
import onePlaceleft2 from "../../Assets/VoomioImages/DegenToonz.svg";
import tradingMonkey from "../../Assets/VoomioImages/tradingmonkey.svg";
import tradingCrypto from "../../Assets/VoomioImages/tradingcrypto.svg";
import tradingDoodles from "../../Assets/VoomioImages/tradingdoodles.svg";
import tradingMoonbirds from "../../Assets/VoomioImages/tradingmoonbirds.svg";
import ethereum from "../../Assets/Images/ethereum.png";
import verified from "../../Assets/Images/verified.png";
import "./Home.css";
import DropDown from "../DropDown/DropDown";

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}
const Home = () => {
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isChain, setIsChain] = useState(false);
  const [open, setopen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    Aos.init();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    function onScroll() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document
          .getElementById("trading-card")
          .classList.add("trading-animation");
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // console.log(windowSize);
  // Dropdown
  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  // past Dropdown
  const past = () => {
    setIsPast(!isPast);
  };
  // past Dropdown
  const all = () => {
    setIsAll(!isAll);
  };
  // chain Dropdown
  const chain = () => {
    setIsChain(!isChain);
  };
  // 1st cards
  const cardsItems = [
    {
      id: "1",
      mainimage: tradingMonkey,
      cardmaintext: "Mutant Ape Yatch Club",
      verifiedimage: verified,
      cardsubtitle: "Floor",
      etereumimage: ethereum,
      cardprice: "70",
    },
    {
      id: "2",
      mainimage: tradingCrypto,
      cardmaintext: "CryptoPunks",
      verifiedimage: verified,
      cardsubtitle: "Floor",
      etereumimage: ethereum,
      cardprice: "70",
    },
    {
      id: "3",
      mainimage: tradingDoodles,
      cardmaintext: "Doodles",
      verifiedimage: verified,
      cardsubtitle: "Floor",
      etereumimage: ethereum,
      cardprice: "70",
    },
    {
      id: "4",
      mainimage: tradingMoonbirds,
      cardmaintext: "Moonbirds",
      verifiedimage: verified,
      cardsubtitle: "Floor",
      etereumimage: ethereum,
      cardprice: "70",
    },
  ];

  // second videocards
  const secondVideo = [
    {
      id: "1",
      videoimage: "/images/alpha.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "2",
      videoimage: "/images/nftstobuy.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "3",
      videoimage: "/images/justinebiber.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "4",
      videoimage: "/images/nftstobuy.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "5",
      videoimage: "/images/justinebiber.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  // third topcreator
  const topCreatorsItems = [
    {
      id: "1",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "2",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "3",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "4",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "5",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
  ];

  //topnft
  const topnft = [
    {
      id: "1",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+537.25%",
      ethereumprice: "993.79",
    },
    {
      id: "2",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+437.25%",
      ethereumprice: "593.79",
    },
    {
      id: "3",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+237.25%",
      ethereumprice: "793.79",
    },
    {
      id: "4",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
    {
      id: "5",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
    {
      id: "6",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
    {
      id: "7",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
    {
      id: "8",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
    {
      id: "9",
      src: "/images/Ellipse 69.svg",
      topnftName: "CryptoPunks",
      Topvalue: "+137.25%",
      ethereumprice: "293.79",
    },
  ];

  return (
    <>
      {/* Oneplace bloges  start*/}
      <div className="homebackgroundimage md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3  md:py-20">
          <div className="hidden lg:flex relative justify-start">
            {" "}
            <img
              src={onePlaceleft2}
              alt="dronze"
              className="one-place-slide-animation -mx-60"
            />
            <img
              src={onePlaceleft1}
              alt="crypto"
              className="absolute -bottom-16 left-28 one-place-slide-up-animation"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="one-place-title text-6xl xl:text-8xl md:mt-0 mt-20">
              One place, it’s all here.
            </h1>
            <p className="one-place-paragraph my-10 text-xl xl:text-2xl">
              Voomio is an omni-friendly shop for buying and selling NFTs. With
              everything from multi-wallet purchasing to gassless minting we’re
              sure you’re going to love it here.
            </p>
            <div className="flex flex-col items-center md:flex-row gap-10">
              <button class="one-place-button text-white  py-2.5 px-14 rounded-full 2xl:text-2xl">
                Explore
              </button>
              <div className="homebuttonborder rounded-3xl text-center mt-3 md:mt-0">
                <button
                  type="button"
                  className="hometitle px-12 py-2 font-bold 2xl:text-2xl "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-end">
            <img
              src={onePlaceRight1}
              alt="dronze"
              className="z-50 w-60 one-place-slide-animation -mx-20"
            />
            <img
              src={onePlaceRight2}
              alt="crypto"
              className="absolute -bottom-28 right-0 w-80 one-place-slide-up-animation -mx-14"
            />
          </div>
        </div>
      </div>
      {/* Oneplace bloges  end*/}

      {/* Trending bloges start*/}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 mb-1">
        <div className="relative flex flex-col md:flex-row justify-between h-16 mb-5">
          <h1 className="trading-main-title pb-10">Trending</h1>
          <DropDown
            title={"Past 24 Hours"}
            item1={"Past 1 Week"}
            item2={"Past 1 Month"}
            item3={"All"}
          />
        </div>
      </div>
      {/* Trending card */}
      <div
        id="trading-card"
        className="container max-w-7xl mx-auto px-4 mt-10 "
        style={{ cursor: "auto" }}
      >
        <div className="flex flex-wrap justify-center mt-14">
          {cardsItems.map((i, index) => (
            <div
              className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
              key={index}
            >
              <div className=" relative network-box mt-16">
                <img
                  alt="John Doe"
                  src={i.mainimage}
                  className="rounded-xl shadow-lg w-full h-auto align-middle border-none undefined"
                />
                <div className="pt-6 text-center">
                  <div className="flex gap-2 pl-6">
                    <h1 className="trading-title  mt-0 mb-2">
                      {i.cardmaintext}
                    </h1>
                    <img src={i.verifiedimage} alt="" className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-end gap-2 pr-5 pb-5">
                    <div>
                      <h1 className="trading-floor font-bold">
                        {i.cardsubtitle}
                      </h1>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <img src={i.etereumimage} alt="etherum" />
                      </div>
                      <div className="trading-price">{i.cardprice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="buttongradient my-10 text-white font-bold py-1 px-12 rounded-full"
            onClick={() => navigate("/aggregator")}
          >
            Load more
          </button>
        </div>
      </div>
      {/* Trending bloges end*/}

      {/* Alpha bloges start*/}
      <div className=" md:p-20">
        <div
          className="container max-w-7xl mx-auto px-4 mt-10"
          style={{ cursor: "auto" }}
        >
          <div className="alpha-title mb-16 px-9">Alpha</div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Carousel breakPoints={breakPoints}>
              {secondVideo.map((i, index) => (
                <div
                  className="max-w-sm rounded overflow-hidden p-2"
                  key={index}
                >
                  <img
                    className="w-full"
                    src={i.videoimage}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="alpha-video-title">{i.videotitle}</div>
                    <p className="alpha-video-text">{i.videotext}</p>
                    <p className="alpha-video-text">{i.videoview}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Alpha bloges end*/}

      {/* Top Creators bloges start*/}
      <div className=" md:p-20">
        <div
          className="container max-w-7xl mx-auto  mt-10"
          style={{ cursor: "auto" }}
        >
          <div className="  trading-main-title mb-16 px-9  ">Top Creators</div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Carousel breakPoints={breakPoints}>
              {topCreatorsItems.map((i, index) => (
                <div className="rounded-xl topcreators-box" key={index}>
                  <div className="rounded-lg  bg-[#e9ae65] ">
                    <div className="px-10 py-8">
                      <div className="flex justify-center">
                        <img
                          className="border p-1 rounded-full bg-white "
                          src={i.createrImage}
                          alt=""
                        />
                      </div>
                      <div className="my-5">
                        <h5 className="topcreatorstitle flex justify-center">
                          {i.createrText}
                        </h5>
                        <h5 className="topcreatorssubtitle flex justify-center border p-2 rounded-full bg-white">
                          {i.createrSubText}
                        </h5>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg">
                      <div className="flex justify-between lg:px-1 xl:flex-row md:flex-row lg:flex-col xl:px-7 py-2 px-6 flex-col gap-2">
                        <div>
                          <div className="topcreatorssubtext">
                            {i.createrFollowing}
                          </div>
                          <div className="topcreatorssubfolow">
                            {i.createrFollowingText}
                          </div>
                        </div>
                        <div>
                          <div className="topcreatorssubtext">
                            {i.createrFollowers}
                          </div>
                          <div className="topcreatorssubfolow">
                            {i.createrFollowersText}
                          </div>
                        </div>{" "}
                        <div>
                          <div className="topcreatorssubtext">
                            {i.createrFollowingCollection}
                          </div>
                          <div className="topcreatorssubfolow">
                            {i.createrFollowingCollectionText}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 justify-center my-4">
                        <button
                          type="button"
                          className=" px-14 py-2 follow text-white rounded-full  text-base font-bold"
                        >
                          <i className="fa-solid fa-plus mr-2"></i>Follow
                        </button>
                      </div>
                      <div className="flex  space-x-2 justify-center">
                        <button
                          type="button"
                          className="topcreatorsfollowing px-9 py-2 bg-[#DBDAE2] text-[#8551E6] rounded-full mb-8"
                        >
                          0x007..373xys..
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Top Creators bloges end*/}

      {/* Top NFT  bloges  start*/}
      <div className="pt-36 ">
        <div
          className="container max-w-7xl mx-auto px-4 mt-10 network-box"
          style={{ cursor: "auto" }}
        >
          <div className="flex sm:justify-center items-center font-bold justify-between secondtitle text-[#222222] mb-5 p-9 ">
            <h1>Top NFT</h1>
            <div className="sm:hidden block">
              <img
                src="/images/Vector.svg"
                alt=""
                className={open ? "hidden" : "block "}
                onClick={() => setopen(true)}
              />
              {open ? (
                <img
                  src="/images/close.svg"
                  alt=""
                  className={open ? "block " : "hidden "}
                  onClick={() => setopen(false)}
                />
              ) : null}
            </div>
          </div>
          <div className={`flex sm:flex-row flex-col gap-2 justify-center `}>
            <div>
              <div className="relative inline-block text-left sm:mb-10 mb-2">
                {open || 650 < windowSize ? (
                  <div className="dropdownborder rounded-xl text-[#6549F6]">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md shadow-sm px-7 py-2 text-sm font-medium menufont z-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={past}
                    >
                      Past 24hrs
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
                ) : null}

                {isPast ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-36 rounded-xl shadow-lg bg-white ring-1 text-[#6549F6] ring-black ring-opacity-5 focus:outline-none dropdownborder"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        Past 24hrs
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Past 24hrs
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        Past 24hrs
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="menufont block w-full text-left px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                        >
                          ALL
                        </button>
                      </form>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="relative inline-block text-left sm:mb-10 mb-2">
                {open || 650 < windowSize ? (
                  <div className="dropdownborder rounded-xl text-[#6549F6]">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={all}
                    >
                      All Categories
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
                ) : null}

                {isAll ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-40 rounded-xl shadow-lg text-[#6549F6] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        monkey
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        king
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        queen
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="menufont block w-full text-left px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                        >
                          ALL
                        </button>
                      </form>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="relative inline-block text-left mb-10">
                {open || 650 < windowSize ? (
                  <div className="dropdownborder rounded-xl text-[#6549F6]">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md shadow-sm px-7 py-2 text-sm font-medium menufont z-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={chain}
                    >
                      All Chain
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
                ) : null}

                {isChain ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-32 rounded-xl shadow-lg text-[#6549F6] bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        0
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        1
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        2
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="menufont block w-full text-left px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                        >
                          ALL
                        </button>
                      </form>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
            {topnft.map((i, index) => (
              <div
                className="sc-1pie21o-0 elyzfO sc-1xf18x6-0 sc-1twd32i-0 sc-1idymv7-0 gyFWjU kKpYwv fNIWSU TopCollections--item"
                key={index}
              >
                <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 ttmcH kKpYwv kuGBEl iVtKaT euUQqP">
                  <span
                    fontSize="16px"
                    className="sc-1xf18x6-0 sc-1aqfqq9-0 bntaok bVuOlt"
                  >
                    <div className="sc-7qr9y8-0 iUvoJs">{i.id}</div>
                  </span>
                </div>
                <div className="sc-1xf18x6-0 hjciTd">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 fOHEVH kKpYwv">
                    <div
                      className="sc-dy59cl-0 kdPOpy Image--isImageLoaded Image--isImageLoaderVisible"
                      style={{ height: 50, width: 50 }}
                    >
                      <img
                        className="Image--image"
                        src={i.src}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="sc-1xf18x6-0 sc-3iovjc-1 haVRLx fcxCQq"
                  >
                    <img src="/images/BadgeCheck.svg" alt="" />
                  </div>
                </div>
                <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-1idymv7-1 haVRLx kKpYwv kuGBEl iVtKaT cjftsJ ml-2">
                  <span
                    width="100%"
                    fontSize="14px"
                    className="sc-1xf18x6-0 sc-1aqfqq9-0 sc-1idymv7-2 dEFzTB cSiicL"
                  >
                    <div className="sc-7qr9y8-0 iUvoJs">{i.topnftName}</div>
                  </span>
                  <span className="sc-1xf18x6-0 sc-1aqfqq9-0 sc-1idymv7-6 cwzfDK knRrSe">
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                      <div className="sc-1xf18x6-0 kqdgfc">Floor price:</div>－
                    </div>
                  </span>
                </div>
                <div className="sc-1xf18x6-0 sc-1idymv7-3 haVRLx dOqAvv">
                  <div className="sc-1xf18x6-0 sc-1twd32i-0 sc-rss0by-0 gblfhv kKpYwv jGmHuk">
                    <span
                      color="seaGrass"
                      fontSize="14px"
                      fontWeight={400}
                      className="sc-1xf18x6-0 sc-1aqfqq9-0 sc-12irlp3-3 ccpCib iedBRS"
                    >
                      <div className="sc-7qr9y8-0 iUvoJs" tabIndex={-1}>
                        {i.Topvalue}
                      </div>
                    </span>
                    <div className="sc-1xf18x6-0 sc-1twd32i-0 iQOhGx kKpYwv">
                      <div
                        display="inline-flex"
                        height="22px"
                        className="sc-1xf18x6-0 sc-1twd32i-0 gEYrEV kKpYwv"
                      >
                        <button
                          aria-label="ETH logo"
                          type="button"
                          className="sc-ty1bh0-0 infdiL"
                        >
                          <div
                            size={14}
                            className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-sbw25j-0 bhuNxV kKpYwv kuGBEl iVtKaT euUQqP jwEsBT"
                          >
                            <img
                              src="/images/ethereum.png"
                              size={14}
                              className="sc-1xf18x6-0 sc-sbw25j-1 bhuNxV kGXfai"
                              alt=""
                            />
                          </div>
                        </button>
                      </div>
                      <span
                        color="#8A939B"
                        fontSize="14px"
                        fontWeight={600}
                        className="sc-1xf18x6-0 sc-1aqfqq9-0 sc-12irlp3-3 eatvNr cIKgGu"
                      >
                        <div className="sc-7qr9y8-0 iUvoJs" tabIndex={-1}>
                          {i.ethereumprice}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pb-16 mt-10">
            <button className="flex container mx-auto w-fit justify-center buttongradient m-15 text-white font-bold py-1 px-12 rounded-full">
              Load more
            </button>
          </div>
        </div>
      </div>
      {/* Top NFT  bloges  end*/}

      {/* Gassless Minting bloges start*/}
      <div className=" md:py-20 overflow-x-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-0">
          <div className="hidden lg:block relative">
            {" "}
            <img
              src={onePlaceleft2}
              alt="dronze"
              className="one-place-slide-animation -mx-60 absolute"
            />
            <img
              src={onePlaceleft1}
              alt="crypto"
              className="absolute top-96 left-28 one-place-slide-up-animation z-50"
            />
            <img
              src={onePlaceRight1}
              alt="dronze"
              className=" w-80 one-place-slide-animation -mx-6 top-[480px] absolute z-10"
            />
            <img
              src={onePlaceRight2}
              alt="crypto"
              className="absolute  w-80 one-place-slide-up-animation top-[700px] -mx-14"
            />
          </div>
          <div className="flex flex-col">
            <div>
              {" "}
              <h1 className="font-bold hometitle text-5xl text-center xl:text-8xl text-white mb-4  ">
                Gassless Minting
              </h1>
            </div>
            <div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (5).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Set up Your Wallet
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Once you’ve set up your wallet of choice, connect it by
                    clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (4).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create Your Collection
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (3).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    List them for sale
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    You choose how you want to sell your NFTs, and we help you
                    sell them!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start md:flex-row my-12  md:space-x-4 ">
              <button className="buttonborder  text-white font-bold py-2  px-12 2xl:text-2xl">
                Explore
              </button>
              <div className="homebuttonborder rounded-3xl text-center mt-3 md:mt-0">
                <button
                  type="button"
                  className="hometitle px-12  py-2 font-bold 2xl:text-2xl "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img src="/images/Group 548 (1).png" alt="rectangle" />
          </div>
        </div>
      </div>
      {/* Gassless Minting bloges end*/}
    </>
  );
};

export default Home;
