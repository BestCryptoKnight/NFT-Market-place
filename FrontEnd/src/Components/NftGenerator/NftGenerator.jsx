import React, { useState } from "react";
import "./NftGenerator.css";

const NftGenerator = () => {
  const [show, setshow] = useState(true);

  const handleSelect = (i) => {
    console.log("::", i);
    if (i === 0) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white  border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    } else if (i === 1) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    } else if (i === 2) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    }
  };

  const Price = [
    {
      id: "0",
      Title: "A great deal",
      subTitle: "Billed biannualy ($300)",
      price: "50",
      year: "mo",
    },
    {
      id: "1",
      Title: "Popular",
      subTitle: "This is the best plan.",
      price: "75",
      year: "mo",
    },
    {
      id: "2",
      Title: "A great deal",
      subTitle: "Annual payments of $500.",
      price: "500",
      year: "yr",
    },
  ];

  return (
    <>
      <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 ">
        <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
        <div className="text-[#7B61FF] pt-6 font-semibold text-3xl">
          Pricing
        </div>
        <div className="text-[#000000]  font-semibold text-2xl pb-16 popuptittle">
          Select a subscription for the PFP & Collection Generator.
        </div>
        <div className="  md:flex md:pt-20">
          {Price.map((i, d) => (
            <div
              id={i.id}
              className="mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"
            >
              <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase">
                {i.Title}
              </p>

              <div className="flex m-4 items-baseline">
                <span className="text-5xl font-extrabold tracking-tight lg:text-7xl text-[#111827]">
                  ${i.price}
                </span>
                <span className="ml-1 text-2xl font-medium text-[#6B7280]">
                  {i.year}
                </span>
              </div>
              {/* <div className=""> */}
              <span className=" pl-5 font-normal text-base text-[#333333] popuptittle">
                {i.subTitle}
              </span>
              {/* </div> */}
              <div className="bg-[white]/60 hover:bg-[white]/60 rounded-xl">
                <ul role="list" className="my-7 space-y-5 m-4 pt-5 popuptittle">
                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div className="flex justify-center ">
                  <button
                    onClick={() => {
                      handleSelect(d);
                    }}
                    type="button"
                    id="btnSelect"
                    className="text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex pt-8 items-center itemcount">
          <button
            // onClick={() => { handleSelect() }}
            type="button"
            id="btnSelect"
            className="text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"
          >
            Select
          </button>
          <div className=" ">
            <p className="text-2xl  font-normal">
              Basic
              <span className="text-sm  font-medium pl-2 text-[#4F46E5] ">
                {" "}
                FREE
              </span>
            </p>

            <p className="font-normal text-base">
              Only single NFTs can be generated with Basic plan.
            </p>
          </div>
        </div>
        {show ? (
          <>
            <div className="pt-10">
              <p className="text-3xl font-semibold text-[#7B61FF]">NFT Type</p>
              <p className="font-normal text-2xl itemcount">
                Select a subscription for the PFP & Collection Generator.
              </p>
            </div>
            <div className="pt-10 grid md:grid-cols-2  grid-col-1 gap-4">
              <div className=" mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF]">
                <img
                  src="/images/star.png "
                  alt="Vector"
                  className="pt-5 px-5 py-5"
                ></img>
                <div className="text-base font-semibold pl-5">
                  Create a Single NFT
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount">
                  This will generate a tokenset based on the preview you have
                  seen in the gallery. What you’ve seen is what you get. Voomio
                  adds randomization to the token number.
                </p>
                <button
                  // onClick={() => { handleSelect() }}
                  type="button"
                  id="btnSelect"
                  className="itemcount text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                >
                  Get Started
                </button>
              </div>

              <div className=" mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]">
                <img
                  src="./images/gropsqaure.png "
                  alt="Vector"
                  className="pt-5 px-5 py-5"
                ></img>
                <div className="text-base font-semibold pl-5">
                  Create an NFT Set
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount">
                  This will create a set based on your rules and rarity
                  settings, but isn’t what you saw in the gallery. This will
                  guarantee higher randomization and less bias.
                </p>
                <button
                  type="button"
                  id="btnSelect"
                  className=" itemcount text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </>
        ) : (
          "null"
        )}
      </div>
    </>
  );
};

export default NftGenerator;
