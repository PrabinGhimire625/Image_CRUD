import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../globals/status"
import { API } from "../http/index";

const imageSlice=createSlice({
    name:"img",
    initialState:{
        data:[],
        status:STATUS.LOADING,
        singleImage:null
    },
    reducers:{
        setImageData(state,action){
            state.data=action.payload
            console.log(state.data)
        },
        setStatus(state,action){
            state.status=action.payload
        },
        setSingleImage(state,action){
            state.singleImage=action.payload
        }
    }
})

export const {setImageData,setStatus,setSingleImage} =imageSlice.actions
export default imageSlice.reducer

//add the image
export function addImage(data){
    return async function addImageTHunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.post("/api/image",data,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS));
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR));
        }
        
    }

}


//fetch all images
export function fetchImage(){
    return async function fetchImage(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response= await API.get("/api/image");
            console.log(response);
            if(response.status===200){
                const {data}=response.data;
                dispatch(setImageData(data));
                dispatch(setStatus(STATUS.SUCCESS));
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR));
        } 
    }
} 

//fetch single images
export function fetchSingleImage(id) {
    return async function fetchSingleImageThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get(`/api/image/${id}`);
            console.log(response);

            if (response.status === 200) {
                const { data } = response.data;
                dispatch(setSingleImage(data));
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                dispatch(setStatus(STATUS.SUCCESS));
            }
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}
