import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";


export const fileUpload = createAsyncThunk(
  "fileUpload",
  async (fileData, thunkAPI) => {
    // console.log(fileData); 
    try {
      let baseUrl = `https://fileupload.eplusapp.et/fileupload-api/files/uploadfile`;

      let response = await axios.post(baseUrl, fileData);
      // dispatch(eplusappfile(formData));
     
   // condition
      if (response.status === 200) {
        handleSuccess("በትክክል ፋይል ልከዋል !");
        return response.data;
        
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }

    } catch (e) {
      // console.log("Error", e.response.data);
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }

  }
);


// export const getUser = createAsyncThunk("getUser", async (id, thunkAPI) => {
//   try {
    
//     // base url
//     let baseUrl = `http://localhost:11215/dedicationapi/users/${id}`;

//     // response
//     let response = await axios.get(baseUrl);
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       handleError(response.message);
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   } catch (e) {
//     handleError(e.response.data.message);
//     return thunkAPI.rejectWithValue(e.response.data);
//   }
// });
// export const updateUser =createAsyncThunk(

//   "user",
//   async (userData, thunkAPI) => {
//     try {
//       const userInfo = localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null;
//       console.log(userInfo);
//       const id=userData.id;

//       let baseUrl = `${BaseUrl}promotionapi/users/${id}`;
      
//       // let response = await createContact(message);
     
//       let response = await axios.put(baseUrl,userData, {headers: { Authorization: `Bearer ${userInfo.token}` } });
     
//       console.log(response);
      
//       if (response.status === 200) {
//         handleSuccess("edit users successfull !");
//         return response.data.users;
//       } else {
//         handleError(response.message);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//     } catch (e) {
//       console.log("Error", e.response.data);
//       handleError(e.response.data.message);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   "loginUser",
//   async (authData, thunkAPI) => {
//     try {
//       // base url
//       let baseUrl = "http://localhost:11215/dedicationapi/users/login";

//       // response
//       let response = await axios.post(baseUrl, authData);

//       // condition
//       if (response.status === 200) {
//         // handleSuccess(response.data.message);
//         // put the user info into local storage
//         const userInfo = { id: response.data.id, token: response.data.token };
//         localStorage.setItem("userInfo", JSON.stringify(userInfo));
//         return response.data;
        
//       } else {
//         handleError(response.message);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//     } catch (e) {
//       handleError(e.response.data.message);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const viewUser = createAsyncThunk(
//   "users",
//   async (thunkAPI) => {
//     try {
//       let URL = `${BaseUrl}promotionapi/users/all`;

//       // let response = await createContact(message);
//       let response = await axios.get(URL);
//       console.log(response);
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         handleError(response.message);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//     } catch (e) {
//       console.log("Error", e.response.data);
//       handleError("loading...");
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const searchUser = createAsyncThunk(
//   "user",
//   async (term, thunkAPI) => {
//     try {
//       // base url
//       let baseUrl = `https://backend.eplusapp.et/promotionapi/users/all?key=${term}`;
//       // response
//       let response = await axios.get(baseUrl);
//       // let response = await createContact(message);
//       if (response.status === 200) {
//         // console.log(response.data);
//         return response.data;
//       } else {
//         handleError(response.message);
//         return thunkAPI.rejectWithValue(response.data);
//       }
//     } catch (e) {
//       console.log("Error", e.response.data);
//       handleError("search single user...");
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

