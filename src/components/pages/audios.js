
import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import { viewfiles } from "../../actions/filename";

const Audios = () =>{

      // dispatch
  const dispatch = useDispatch();
  // hooks
  const files = useSelector(
    (state) => state.files
  );
  console.log(files);

  // use effect
  useEffect(() => {
    dispatch(viewfiles());
  }, []);
    return(
<>
    <Layout/>
      <div className="flex w-full mt-6 items-center justify-center">  
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
           <span>2015 ዓ.ም</span>
         </button>
      </div>
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    
  {
        (files.files?.length)>0
          ?(
            files?.files?.map((file) => (

    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-32 md:p-2 ">

          <audio width="750" height="500" controls >
           <source src={`${BaseUrl}/audios/${file.fileName}`} controls  type="audio/mp3"/>
         </audio>
          
      </div>
      </div>
       )) )
    :(<div>Search audios</div>)  
    }
  </div>
</div>

        </>
    )
}
export default Audios;