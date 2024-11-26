import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../store/imageSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { data, status} = useSelector((state) => state.img);
  console.log(data);
  console.log(status);
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);


  return (
    <div className="flex flex-wrap justify-center mt-5 space-x-5">
      {
        data.length> 0 ? (data.map((datas)=>(
         <Link to={`/singleImage/${datas?._id}`}>
              <div class="p-5 border rounded text-center text-gray-500 max-w-sm">
                <img class="w-32 h-32 rounded-full mx-auto" src={datas?.image} alt=""/>
                <div class="text-sm mt-5">
                  <button>edit</button>
                </div>
              </div>
         </Link>
        ))
      ):(
        <p>Error on displaying images</p>
      )
      } 
    </div>
 
  );
};

export default Home;
