import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { GiHelp } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
const App = () => {
  return (
    <>
      <div className=' shadow-lg shadow-gray-200  py-5'>
        <div className='flex justify-between mx-32 px-5  items-center'>
          <div className='flex items-center'>

            <img src="data:image/png;base64,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" height={40} width={90} />

            <div className='font-bold text-sm  flex items-center gap-2 '>
              <span className='border-b-2  border-black  hover:text-orange-500 hover:border-orange-400'>Others</span>
              <span>
                <RiArrowDropDownLine size={30} color='orange' />
              </span>
            </div>
          </div>
          <div>
            <div className='flex gap-20'>
              <div className='flex items-center gap-2 hover:text-orange-500'>
                <FaSearch />
                <span>Search</span>
              </div>
              <div className='flex items-center gap-2 hover:text-orange-500'>
                <FaPercentage />
                <div>
                  <span className='absolute'>Offers</span>
                  <span className=' text-xs text-orange-500 relative bottom-3 left-11'>New</span>
                </div>
              </div>
              <div className='flex items-center gap-2 hover:text-orange-500'>
                <GiHelp />
                <span>Help</span>
              </div>
              <div className='flex items-center gap-2 hover:text-orange-500'>
                <IoPerson />
                <span>Sign In</span>
              </div>
              <div className='flex items-center gap-2 hover:text-orange-500'>
                <FaShoppingCart />
                <span>
                  Cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' items-center  justify-start mx-56 mt-4 text-2xl font-bold'>
        <div className='flex items-center justify-between'>
          <h2>What's on your mind?</h2>
          <div className='flex gap-3'>
            <FaArrowCircleLeft color='lightgray' size={35} />
            <FaArrowCircleRight color='lightgray  ' size={35} />
          </div>
        </div>
        <div className='mt-4 flex gap-3 '>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
            width={150} alt="" className='hover:scale-105' />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
            width={150} alt="" className='hover:scale-105' />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png "
            width={150} alt="" className='hover:scale-105' />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
            width={150} alt=""  className='hover:scale-105'/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
            width={150} alt="" className='hover:scale-105' />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"
            width={150} alt="" className='hover:scale-105' />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png"
            width={150} alt="" className='hover:scale-105' />
        </div>
      </div>
      {/* border */}
      <div className='border-b-2 border-gray-200 my-9 mx-56'></div>
      {/* second dishes  */}
      <div className=' items-center  justify-start mx-56 mt-4 text-2xl font-bold'>
        <div className='flex items-center justify-between'>
          <h2>Top restaurant chains in Mumbai</h2>
          <div className='flex gap-3'>
            <FaArrowCircleLeft color='lightgray' size={35} />
            <FaArrowCircleRight color='lightgray  ' size={35} />
          </div>
        </div>
            <div className='mt-4 grid grid-cols-2 gap-2 sm:grid sm:grid-cols-4  sm:gap-7'>
              
              <div className=' h-48 w-64 hover:scale-105'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" className='shadow-lg shadow-gray-400 z-0 w-[100%] h-[100%] rounded-xl object-fit: cover'  alt="" />
                  <h1 className='relative z-10 bottom-9 text-white'>50% OFF UPTO $100</h1>
              </div>
              <div className=' h-48 w-64 hover:scale-105'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" className='shadow-lg shadow-gray-400 z-0 w-[100%] h-[100%] rounded-xl object-fit: cover'  alt="" />
                  <h1 className='relative z-10 bottom-9 text-white'>50% OFF UPTO $100</h1>
              </div>
              <div className=' h-48 w-64 hover:scale-105'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4" className='shadow-lg shadow-gray-400 z-0 w-[100%] h-[100%] rounded-xl object-fill'  alt="" />
                  <h1 className='relative z-10 bottom-9 text-white'>50% OFF UPTO $100</h1>
              </div>
              <div className=' h-48 w-64 hover:scale-105'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" className='shadow-lg shadow-gray-400 z-0 w-[100%] h-[100%] rounded-xl object-fit: cover '  alt="" />
                  <h1 className='relative z-10 bottom-9 text-white'>50% OFF UPTO $100</h1>
              </div>
              {/* <div className='border-4 h-56 rounded-md w-72'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" className='w-[100%] h-[100%] object-fit: cover'  alt="" />
              </div> */}
              
            </div>
      </div>
    </>

  )
}

export default App