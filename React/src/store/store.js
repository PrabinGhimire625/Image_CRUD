import {configureStore} from "@reduxjs/toolkit"
import imageSlice from "./imageSlice"
const store=configureStore({
    reducer:{
        img:imageSlice

    }
})

export default store