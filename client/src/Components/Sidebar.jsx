import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({selectedUser,setSelectedUser}) => {
  const navigate = useNavigate();
  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white   ${selectedUser? 'max-md:hidden': ''}`}>
      <div className="pb-5">
        <div className="flex justify-between item-center">
          <img src={assets.logo} alt="logo" className='max-w-40 object-contain'/>
          <div className="relative py-5 group">
              <img src={assets.menu_icon} alt="menu" className='max-h-5 cursor-pointer'/>
              <div className="absolute top-full right-0 z-20 w-32 p-5 rouded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block" >
                <p onClick={()=>{
                  navigate('/Profile')
                }} className="cursor-pointer text-sm">Edit Profile</p>
                <hr className="my-2 border-t border-gray-500" />
                 <p className="cursor-pointer text-sm">Logout</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar