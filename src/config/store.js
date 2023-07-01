 // config
import { configureStore } from '@reduxjs/toolkit'

// reducers
import fileReducer from '../reducers/fileReducer'
import filenameReducer from '../reducers/filenameReducer'
import  userReducer  from '../reducers/userReducer'


// store
const store = configureStore({
  // reducer
  reducer: {
    files: fileReducer,
    filename: filenameReducer,
    users: userReducer
  }
})

// export
export default store