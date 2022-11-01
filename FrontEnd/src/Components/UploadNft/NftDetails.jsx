import React from "react";

const NftDetails = ({ closeModal }) => {
  const attributes = [
    {
      id: 1,
      name: "Clothes",
      content: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "Hair",
      content: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Texture",
      content: "Lorem Ipsum",
    },
    {
      id: 4,
      name: "Eyes",
      content: "Lorem Ipsum",
    },
    {
      id: 5,
      name: "Mouth",
      content: "Lorem Ipsum",
    },
    {
      id: 6,
      name: "Color Background",
      content: "Lorem Ipsum",
    },
    {
      id: 7,
      name: "Body",
      content: "Lorem Ipsum",
    },
  ];

  const openRule = () => {
    console.log(`hello`);

    const ruleCreation = document.getElementById("ruleCreation");
    ruleCreation.classList.remove("hidden");
    ruleCreation.classList.add("block");

    const createButton = document.getElementById("createButton");
    createButton.classList.remove("text-white");
    createButton.classList.remove("create-button");
    createButton.classList.add("text-[#6549F6]");
    createButton.classList.add("border-2");
    createButton.classList.add("border-[#6549F6]");

    const createCancel = document.getElementById("createCancel");
    createCancel.textContent = "Cancel";

    const plusXmark = document.getElementById("plusXmark");
    plusXmark.classList = "fa-solid fa-xmark";
  };

  return (
    <>
      <div
        id="popup-modal"
        tabindex="-1"
        class="overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 z-50 md:inset-0 h-modal md:h-full py-8 items-center justify-center flex transition duration-700 ease-in-out"
        aria-modal="true"
        role="dialog"
      >
        <div class="relative w-full max-w-xl h-full md:h-auto bg-white rounded-xl shadow-2xl ">
          <div class="relative rounded-lg shadow px-4">
            <button
              type="button"
              class="absolute top-1 right-3 text-[#6549F6] bg-transparent rounded-lg text-sm ml-auto inline-flex items-center "
              data-modal-toggle="popup-modal"
              onClick={() => {
                closeModal(false);
              }}
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex gap-10 justify-center mt-6">
            <div>
              <img
                src="/images/monkey.png"
                alt=""
                className="h-64 w-64 rounded-lg"
              />
            </div>
            <div className="w-64">
              <div className="font-semibold text-lg pb-4">Attributes</div>
              <div>
                {attributes.map((i) => {
                  return (
                    <div className="flex gap-2 justify-between text-base">
                      <div className="font-medium pb-1">{i.name}</div>
                      <div className="font-normal">{i.content}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end my-5">
                <div
                  id="createButton"
                  className="create-button flex items-center gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer"
                >
                  <i id="plusXmark" className="fa-solid fa-plus"></i>
                  <div id="createCancel" onClick={openRule}>
                    Create Rule
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ruleCreation" className="bg-[#F4EEFF] mt-5 pl-3 hidden">
            <div className="text-[#6549F6] font-semibold text-lg">
              Create A Rule
            </div>
            <div className="font-normal text-base pt-2">
              After you create a rule any existing tokens will be regenerated.
            </div>
            <div className="flex gap-2 justify-between pr-3">
              <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                <div>Cowboy vest</div>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                <div>Doesn’t mix with</div>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                <div>Captain Hat</div>
                <div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-end pr-4 py-5">
              <div className="create-button flex items-center w-44 gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer">
                <i class="fa-solid fa-plus"></i>
                <div>Create Rule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftDetails;
