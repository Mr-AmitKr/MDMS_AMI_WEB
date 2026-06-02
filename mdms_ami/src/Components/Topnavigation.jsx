import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineElectricMeter } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { TbNetwork } from "react-icons/tb";
import { MdNotificationsActive } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineAvTimer } from "react-icons/md";
import { LuChartBarBig } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";


const topnavigation = () => {
    const buttonStyle = () => {
  return "flex justify-center items-center border border-gray-600 w-12 h-12 rounded-[10px] text-white text-2xl transition-all duration-300 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-[#3b82f6]/40 hover:shadow-[0_8px_16px_-6px_rgba(59,130,246,0.4)] hover:-translate-y-[2px]:";
}; 
const iconstyle = ()=>{
return "opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter: brightness(10) saturate(100%) invert(44%) sepia(97%) saturate(3048%) hue-rotate(205deg) brightness(101%) contrast(98%)";
}
  return (
    <div
  className="
  fixed
  top-0
  right-0
  lg:left-72
  left-0
  z-40
  h-20
  bg-black/90
  backdrop-blur-md
  border-b
  border-gray-700
  flex
  items-center
  justify-between
  px-4
  "
>

         {/* navbar_option */}
         <div
  className="
  flex
  justify-center
  gap-3
  overflow-x-auto
  scrollbar-hide
  flex-1
  pr-4
  "
>
            <button  className={buttonStyle()} ><MdOutlineElectricMeter  className={iconstyle()}/></button>
            <button  className={buttonStyle()}><TbNetwork  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><MdNotificationsActive  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><CgFileDocument  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><FiUploadCloud  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><MdOutlineAvTimer  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><LuChartBarBig  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><MdOutlineHealthAndSafety   className={iconstyle()}/></button>
            <button  className={buttonStyle()}><MdOutlineSystemUpdateAlt  className={iconstyle()} /></button>
            <button  className={buttonStyle()}><LuCalendarClock  className={iconstyle()} /></button>
         </div>
           {/* user_profile */}
        <div
  className="
  hidden
  md:flex
  border-l
  border-gray-700
  h-full
  items-center
  px-4
  gap-2
  "
>
              <img className="w-16 h-16 rounded-full" src="https://i.pinimg.com/736x/23/b9/9a/23b99ad376236e968a264f7c5469ba15.jpg" alt="user_info" />
              <div className='text-white'>
                <h4 className='text-[13px] text-gray-400 '>user_id@</h4>
              <h1 className='text-[15px] flex items-center gap-3 text-gray-200 '>user_name@<FaCaretDown className='cursor-pointer'/></h1>
              </div>
        </div>
    </div>
  )
}

export default topnavigation
