import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import BaseUrl from "../../utils/base_url";
import React, { useState,useEffect} from "react";
import { viewfiles } from "../../actions/filename";
import Img2 from "../../img/img2.jpg";
const Image = () =>{
  
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

      const [list, setList] = useState(false)
      const [list2, setList2] = useState(false)
      const handleClick = () => {
             setList(l => !l);
         }
         const handleClick2 = () => {
          setList2(l => !l);
      }

return(
  <>
    <Layout/>
    <div className="flex w-full mt-6 items-center justify-center">  
       <button
       onClick = {handleClick}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
         <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
         <span>2015 ዓ.ም</span>
       </button>
    </div>
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    {list &&
    <div className="space-x-2">
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>መስከረም</span>
         </button>
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ጥቅምት</span>
         </button>
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ህዳር</span>
         </button>  
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ታህሳስ</span>
         </button>
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ጥር</span>
         </button>  
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ይካቲት</span>
         </button> 
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>መጋቢት</span>
         </button> 
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ሚያዚያ</span>
         </button> 
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ግንቦት</span>
         </button>          
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ሰኔ</span>
         </button> 
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ሀምሌ</span>
         </button> 
         <button
         onClick = {handleClick2}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center items-center">
           {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
           <span>ነሀሴ</span>
         </button> 
    </div>

}
      {list2 &&                                                
      <div class="-m-1 flex flex-wrap md:-m-2">   
      
          {
            (files.files?.length)>0
             ?(
               files?.files?.map((file) => (
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                 <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center
                           w-screen h-32 hover:scale-50 transition cursor-pointer duration-700
                           "
                     src={`${BaseUrl}/images/${file.fileName}`}
                  />
               </div>
            </div>
            )) )
            :(<div>Search images</div>)  
             }
        </div>
}

     </div>
</>
    )
}
export default Image;