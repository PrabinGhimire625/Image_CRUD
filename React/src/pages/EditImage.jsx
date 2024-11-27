import React from 'react';

const EditImage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[300px] w-[300px] bg-gray-200 rounded-md p-4">
        <label className="cursor-pointer">
          <img className="object-cover rounded-full shadow-lg bg-indigo-50 text-indigo-600 h-20 w-20 md:h-28 md:w-28" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&s" alt="Profile" />
          <input type="file" accept="image/*" name="image" className="hidden" />
        </label>
        <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Save</button>
      </div>
    </>
  );
};

export default EditImage;
