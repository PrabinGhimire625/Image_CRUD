import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../store/imageSlice';
import { STATUS } from '../globals/status';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {
    const [ImageData, setImageData] = useState({ image: "" });
    const dispatch = useDispatch();
    const [previewImage, setPreviewImage] = useState("");
    const {status}=useSelector((state)=>state.img);
    const navigate=useNavigate();
    console.log(status);
    const handleChange = (e) => {
        const { name, files } = e.target;
        if (name === 'image') {
            setPreviewImage(URL.createObjectURL(files[0])); // Preview the selected image
            setImageData({ ...ImageData, [name]: files[0] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addImage(ImageData)); 
    };

    useEffect(()=>{
        if(status===STATUS.SUCCESS){
            alert("Image is successfully saved!");
            navigate("/");
        }
    },[status,dispatch,navigate])

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[300px] w-[300px] bg-gray-200 rounded-md p-4">
                <form onSubmit={handleSubmit}>
                    <label className="cursor-pointer">
                        <img className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-20 w-20 md:h-28 md:w-28" 
                            src={previewImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s"} 
                            alt="Profile" 
                        />
                        <input onChange={handleChange} type="file" accept="image/*" name="image" className="hidden" />
                    </label>
                    <button type="submit" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Save</button>
                </form>
            </div>
        </>
    );
};

export default AddImage;
