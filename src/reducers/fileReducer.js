import { createSlice } from '@reduxjs/toolkit'
import { fileUpload} from '../actions/fileAction';
import { viewfiles } from '../actions/filename';
const initialState = {
  loading: false,
  file: {},
  files: [],
  error: false,
  success: false,
  message: null,
  isLogin: false,
}

const userSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: {
    // uploadfiles
    [fileUpload.pending]: (state) => {
      state.loading = true
      state.error = null
     
    },
    [fileUpload.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // send file succefully
      state.error = false
      state.files = payload
      state.message = payload.message
      console.log("filemen :",payload);
    },
    [fileUpload.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.message = payload.message
      state.success = false
      console.log("uploadfile fial");
    },

    [viewfiles.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [viewfiles.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.files = payload
    },
    [viewfiles.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      state.files = false
    },
//     [getUser.pending]:(state)=>{
//       state.loading = true
//       state.error = null
//     },
//     [getUser.fulfilled]:(state,{payload})=>{
//       state.loading = false
//       state.success = true
//       state.error = false
//       state.user = payload
//     },
//     [getUser.rejected]:(state,{payload})=>{
//       state.loading = false 
//       state.error = true 
//       state.message = payload.message
//       state.success = false
//     },
//     [updateUser.pending]:(state)=>{
//       state.loading = true
//       state.error = null
//     },
//     [updateUser.fulfilled]:(state,{payload})=>{
//       state.loading = false
//       state.success = true
//       state.error = false
//       state.user = payload
//     },
//     [updateUser.rejected]:(state,{payload})=>{
//       state.loading = false 
//       state.error = true 
//       state.message = payload.message
//       state.success = false
//     }
  },
})
export default userSlice.reducer