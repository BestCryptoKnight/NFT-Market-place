import React, { useRef, useState } from "react";
// import Wave from "react-wavify";
import "./UploadNft.css";
import { useNavigate } from "react-router-dom";

const UploadNft = () => {
  // upload image
  const [selectedImage, setSelectedImage] = useState();
  //   new upload
  function handleFile(files) {
    console.log("Number of files: " + files.length);
  }
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
      setSelectedImage(e.target.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files);
      setSelectedImage(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleSort = (e) => {
    const element = document.getElementById("sort-layers");
    element.classList.remove("text-[#6549F6]");
    element.classList.add(`bg-[#6549F6]`, `text-white`);
    document.getElementById("sort-img").src = "/images/sort(1).png";
    let showHide = document.getElementById("showHidden");
    showHide.classList.remove("hidden");
    showHide.classList.add("block");

    const elem = document.getElementById("showOnClick");
    elem.classList.toggle("hide");
  };

  const order = [
    {
      id: 1,
      name: "Body - Lorem",
    },
    {
      id: 2,
      name: "Clothes - Lorem",
    },
    {
      id: 3,
      name: "Color Background",
    },
    {
      id: 4,
      name: "Eyes",
    },
    {
      id: 5,
      name: "Hair",
    },
    {
      id: 6,
      name: "Mouth",
    },
    {
      id: 7,
      name: "Texture",
    },
  ];

  const navigate = useNavigate();

  const goToPreview = () => {
    navigate("/preview");
  };

  const goToGenerate = () => {
    navigate("/generate");
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
        <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
        <div className="flex items-center justify-between neueHaasGrotesk">
          <div>
            <div className="text-[#250C50] pt-6 text-lg ">Current NFT</div>
            <div className="text-[#6549F6]  text-lg pb-16 ">Single-item</div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col justify-center items-center">
              <img src="/images/upload.svg" alt="" />
              <img src="/images/path.svg" alt="" />
            </div>
            <div onClick={() => goToPreview()}>
              <img src="/images/EyeOutline.svg" alt="" />
            </div>

            <img src="/images/CogOutline.svg" alt="" />

            <div onClick={() => goToGenerate()}>
              <img src="/images/star.png" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-[10%] neueHaasGrotesk">
          <div className="text-[#250C50] pb-2 text-lg ">Settings</div>
          <div className="text-[#6549F6]  text-md pb-2">General</div>
          <div className="text-[#6549F6]  text-md pb-2">Layers</div>{" "}
          <div className="text-[#6549F6]  text-md ">Rules</div>
        </div>
        <div className="flex items-center justify-between mt-40 flex-wrap">
          <div className="">
            {/* new */}
            <div className="flex justify-center">
              <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  accept="image/*"
                  ref={inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  onChange={handleChange}
                />
                {selectedImage ? (
                  <label id="label-file-upload" htmlFor="input-file-upload">
                    <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  </label>
                ) : (
                  <label
                    id="label-file-upload"
                    htmlFor="input-file-upload"
                    className={dragActive ? "drag-active" : ""}
                  >
                    <div>
                      <p>Drag and drop your file here or</p>
                      <button className="upload-button" onClick={onButtonClick}>
                        Upload a file
                      </button>
                    </div>
                  </label>
                )}
                {dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  ></div>
                )}
              </form>
            </div>

            <div id="wave" className="flex flex-col items-center">
              <div className="font-extrabold text-3xl text-[#D6C3FA]">
                Uploading...
              </div>
              {/* <Wave mask="url(#mask)" fill="#D6C3FA" speed={0.4}>
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="#7B61FF" />
                    <stop offset="0.7" stopColor="#00DAD9" />
                  </linearGradient>
                  <mask id="mask">
                    <rect
                      x="0"
                      y="0"
                      width="2000"
                      height="200"
                      fill="url(#gradient)"
                    />
                  </mask>
                </defs>
              </Wave> */}
            </div>

            <div className="flex justify-center">
              <div className="border-[#6549F6] border-4 rounded-2xl xl:w-[1000px] flex flex-col items-center justify-center py-10">
                <form
                  id="form-file-upload"
                  onDragEnter={handleDrag}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="">
                    <div className="flex justify-center items-center mt-3 ">
                      <i class="fa-solid fa-circle-check fa-4x text-[#87FDDD] zoom-in-zoom-out"></i>
                    </div>
                    <div className="font-semibold text-2xl">Success!</div>
                    <div className="text-[#999999] font-normal text-base neueHaasGrotesk">
                      Your upload has completed.
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-center gap-3 mt-3 px-3 neueHaasGrotesk">
                      <div className="flex items-center justify-center border-[#6549F6] text-[#6549F6] border-2 w-24 rounded-md xl:w-36 font-medium text-base h-12 box-border px-4">
                        <div className="">Upload More</div>
                      </div>

                      <div
                        className="flex items-center justify-center border-[#6549F6] text-[#6549F6] border-2 rounded-md xl:w-36 font-medium text-base h-12 gap-2 cursor-pointer"
                        id="sort-layers"
                        onClick={handleSort}
                      >
                        <div>Sort Layers</div>
                        <div>
                          <img
                            src="/images/sort.png"
                            id="sort-img"
                            alt=""
                            className="h-2 w-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* preview and Attributes-order */}
                </form>

                <div id="showOnClick" className="show">
                  <div id="showHidden" className="hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-20 mt-20 neueHaasGrotesk">
                      {/* col-1 */}
                      <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">Preview</div>
                        <div>
                          <img
                            src="/images/mrmonkey.png"
                            alt=""
                            className="h-64 w-64"
                          />
                        </div>
                        <div className="bg-[#6549F6] rounded-lg text-white flex items-center justify-center font-medium text-lg py-3">
                          <div>
                            Shuffle Order
                            <i className="fa-solid fa-shuffle pl-3 "></i>
                          </div>
                        </div>
                      </div>

                      {/* col-2 */}
                      <div>
                        <div className="flex flex-col gap-3">
                          <div className="text-2xl font-bold">
                            Attributes Order
                          </div>
                          {order.map((i) => (
                            <div
                              className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box"
                              key={i.id}
                            >
                              <div>{i.name} </div>
                              <div>
                                <img
                                  src="/images/sort.png"
                                  alt=""
                                  className="h-2 w-4"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadNft;
