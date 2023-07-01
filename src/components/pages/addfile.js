import React from "react";
import Layout from "../layout/layout";
import { Axios } from "axios";
import { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { fileUpload } from "../../actions/fileAction";
import { useDispatch, useSelector } from "react-redux";
import {eplusappfile} from "../../actions/filename";
const Addfile=(props) =>{

  const [file, setFile] = useState("");
  const { handleSubmit,register,formState: { errors }} = useForm();
  const { files } = useSelector((state) => state.files);
  const dispatch = useDispatch();

  //get file input
    const setImgfile = (e) => {
      // setFile(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  const OnSubmit = (data, e) => {
    // upload file name

    var formData = new FormData();

    formData.append("fileName", file)
    dispatch(fileUpload(formData)); 
    //  console.log('name :',files.fileName);
    //  console.log('fileType :',files.filetype);

    if(files !==''){
      //useEffect(() => {
        // console.log("inside save file")

        dispatch(eplusappfile(files));
      //},[]);
    } 
}

    return(
        <>
        <Layout/>
        
    <div className="bg-[#E4E4E4] mt-12">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <h4 className="text-center">ይህ ኢጵላሣጵ ፋይል ማስቀመጫ ነው</h4>

        <div class="flex w-full h-52 items-center justify-center bg-grey-lighter">
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide
                       uppercase border border-blue cursor-pointer hover:bg-blue">
              <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                 <path
                   d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <label class="block">
              <span class="mt-2 text-base leading-normal">ገብተው ይምረጡ </span>
              <input type="file" name='fileName' onChange={setImgfile} multiple
                    class="block w-full text-slate-500 file:mx-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 
                    file:text-violet-700 hover:file:bg-violet-100"
              />
              </label>
             
             
         </label>
       </div>
 
       <div className="flex w-full h-32 items-center justify-center">
         <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
            from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 
            dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                 የመረጡትን ያስቀምጡ !
            </span>
         </button>
       </div> 

      </form>
    </div>
        </>
    )
}
export default Addfile;