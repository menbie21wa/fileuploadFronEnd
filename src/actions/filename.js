import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";

export const eplusappfile = createAsyncThunk(

  "fileData",
  async (fileData, thunkAPI) => {
      console.log("comming here")
      try {
   
        let baseUrl = `https://fileupload.eplusapp.et/fileupload-api/eplusapp/create`;
  
        let response = await axios.post(baseUrl, fileData);
  
        console.log(response);
        // condition
        if (response.status === 200) {
         handleSuccess("በትክክል ፋይል ልከዋል !");
          return response.data;
          
        } else {
         handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
       handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const viewfiles = createAsyncThunk(
  "files",
  async (thunkAPI) => {
    try {
      let URL = `https://fileupload.eplusapp.et/fileupload-api/eplusapp/all`;
      
        console.log('view files action');
      // let response = await createContact(message);
      let response = await axios.get(URL);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);