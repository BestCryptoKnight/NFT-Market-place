import './Generate.css'
import { useState, useRef } from 'react';

const Generate = () => {
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

   const order = [
      {
         id: 1,
         name: 'Body - Lorem'
      },
      {
         id: 2,
         name: 'Clothes - Lorem'
      },
      {
         id: 3,
         name: 'Color Background'
      },
      {
         id: 4,
         name: 'Eyes'
      },
      {
         id: 5,
         name: 'Hair'
      },
      {
         id: 6,
         name: 'Mouth'
      },
      {
         id: 7,
         name: 'Texture'
      },
   ]

   const openLayers = () => {

      document.getElementById("general-section").classList.toggle("hidden")
      document.getElementById("layers-section").classList.toggle('hidden')
      document.getElementById("heading").textContent = 'Layers'
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }

   const [ruleValues, setRuleValues] = useState([
      {
         component: '',
         rule: '',
         component2: '',
      }
   ])


   const handleNewRules = () => {
      setRuleValues([...ruleValues,
      {
         price: '',
         reference_id: '',
         validity: '',
      }
      ]);
   };

   const handleRuleChange = (e, index) => {
      let clone = [...ruleValues];
      let obj = clone[index];
      clone[index] = obj;
      setRuleValues([...ruleValues]);
   };

   const rules = [
      {
         id: 1,
         name: 'Select a component',
      },
      {
         id: 2,
         name: 'Select a Rule',
      },
      {
         id: 3,
         name: 'Select a component',
      },
   ]

   const addBtn = (e) => {
      e.preventDefault()
      const ele = document.getElementById('rule')
      console.log(ele.value)
   }


   return (

      <>

         <div className=''>
            <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
               <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
               <div className="flex items-center justify-between">
                  <div>
                     <div className="text-[#250C50] pt-6 text-lg itemcount">
                        Current NFT
                     </div>
                     <div className="text-[#6549F6]  text-lg pb-16 itemcount">
                        Single-item
                     </div>
                  </div>
                  <div className="flex items-center gap-10">
                     <div className="opacity-50 flex flex-col justify-center items-center">
                        <img src="/images/upload.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg  itemcount ">Upload</p>
                     </div>
                     <div className='flex flex-col justify-center items-center opacity-50'>
                        <img src="/images/EyeOutline.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg  itemcount ">Preview</p>
                     </div>

                     <div className="flex flex-col items-center opacity-50">
                        <img src="/images/CogOutline.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg itemcount ">Manage</p>
                     </div>
                     <div className="flex flex-col items-center opacity-100">
                        <img src="/images/star.png" alt="" className="" />
                        <p className="text-[#6549F6]  text-lg  itemcount ">Generate</p>
                        <img src="/images/path.svg" alt="" />
                     </div>


                  </div>
               </div>

               <div className='flex gap-8 ml-[132px]'>
                  <div></div>
                  <div className='flex gap-10 font-semibold text-2xl'>
                     <div className="text-[#6549F6]">
                        <div id='heading'>General</div>
                     </div>
                  </div>
               </div>

               <div className='flex mt-20 gap-8'>
                  <div className='flex gap-24'>
                     <div className="flex justify-between  flex-wrap">
                        <div>
                           <div className="text-[#250C50] pb-2 text-lg itemcount">
                              Settings
                           </div>
                           <div className="text-[#6549F6]  text-md pb-2 itemcount">
                              General
                           </div>
                           <div className="text-[#6549F6]  text-md pb-2 itemcount">Layers</div>
                           <div className="text-[#6549F6]  text-md itemcount">Rules</div>
                        </div>
                     </div>
                  </div>

                  {/* General */}

                  <div className="ml-14" >
                     <div id='general-section'>
                        <div className="flex gap-4">
                           <div>
                              <img src="/images/gallery.png" alt="" className="w-24 h-24" />
                           </div>

                           <div className='flex justify-center flex-col gap-3'>
                              <div className='font-normal'>Collection Logo</div>
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
                                          <div className='uploadBackground w-40 flex justify-center items-center rounded-2xl gap-1 py-1'>
                                             <img src="/images/UploadOutline.png" alt="" className='h-5 w-5' />
                                             <button className="upload-button text-[#8551E6] decoration-0 font-medium" onClick={onButtonClick} >
                                                Upload
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
                           </div>
                        </div>
                        {/* Form Details */}
                        <div className='mt-8'>
                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Collection Name</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='My new collection' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Token Count</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='Number' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Description</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <textarea type="text" rows="6" cols="47" placeholder='A short description' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4 outline-none overflow-hidden'></textarea>
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Website</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='https://' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Token Name</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                 <input type="text" placeholder='Token {{id}}' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8 flex gap-2'>
                              <div>
                                 <div className='font-normal text-base text-[#333333]'>Payout wallet</div>
                                 <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                    <input type="text" placeholder='0x000..' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                                 </div>
                              </div>

                              <div>
                                 <div className='font-normal text-base text-[#333333]'>Royalty Percentage</div>
                                 <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                    <input type="text" placeholder='%' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                                 </div>
                              </div>

                           </div>

                           <div className='mt-4 flex gap-1 justify-center items-center text-[#8551E6] uploadBackground rounded-3xl w-28 py-2 px-2 cursor-pointer' onClick={openLayers}>
                              <i className="fa-solid fa-plus"></i>
                              <div>Add</div>
                           </div>

                        </div>
                     </div>


                     {/* Layers */}


                     <div id='layers-section' className='hidden'>
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-20">
                           {/* col-1 */}
                           <div className="flex flex-col gap-3">
                              <div className="text-2xl font-bold">Preview</div>
                              <div>
                                 <img src="/images/mrmonkey.png" alt="" className="h-64 w-64" />
                              </div>
                              <div className="bg-[#6549F6] rounded-lg text-white flex items-center justify-center font-medium text-lg py-3">
                                 <div >Shuffle Order
                                    <i className="fa-solid fa-shuffle pl-3 " ></i>
                                 </div>
                              </div>
                           </div>

                           {/* col-2 */}
                           <div>
                              <div className="flex flex-col gap-3">
                                 <div className="text-2xl font-bold">Attributes Order</div>
                                 {order.map((i) =>
                                    <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box" key={i.id}>
                                       <div >{i.name} </div>
                                       <div>
                                          <img src="/images/sort.png" alt="" className="h-2 w-4" />
                                       </div>
                                    </div>
                                 )}
                              </div>

                           </div>


                        </div>
                     </div>


                     {/* Rules */}

                     {/* <div>
                        <div className='text-2xl font-bold'>Create a rule</div>

                        <div className="flex gap-3 mt-4 items-center">
                           {rules.map((rule, i) =>

                              <div id='rule' >
                                 <div className='addClass'>
                                    <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box" onClick={addBtn} key={i.id}>
                                       <div>Select a component</div>
                                       <div>
                                          <i class="fa-solid fa-chevron-down"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                           )}
                           <div className='flex gap-1 justify-center items-center text-[#8551E6] uploadBackground rounded-3xl w-28 py-2 px-2 cursor-pointer'>
                              <i className="fa-solid fa-plus"></i>
                              <div>Add</div>
                           </div>
                        </div>
                     </div> */}
                  </div>

               </div>


            </div>
         </div >
      </>
   )
}

export default Generate
