import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleImage } from "../store/imageSlice";

const SingleImage = () => {
    const { id } = useParams(); 
    console.log("Image ID:", id);

    const dispatch = useDispatch();
    const { singleImage, status } = useSelector((state) => state.img); 

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleImage(id)); // Fetch the single image
        }
    }, [id, dispatch]);

    return (
        <div className="flex flex-wrap justify-center mt-5 space-x-5">
            {singleImage ? (
                <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
                    <img
                        className="w-32 h-32 rounded-full mx-auto"
                        src={singleImage?.image} 
                        alt="Fetched"
                    />
                    <div className="text-sm mt-5 space-x-4">
                        <Link to={`/editImage/${singleImage._id}`} className="bg-blue-500 text-white px-3 py-1 rounded">
                            Edit
                        </Link>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                            delete
                        </button>
                    </div>
                </div>
            ) : (
                <p>No image found.</p>
            )}
        </div>
    );
};

export default SingleImage;
