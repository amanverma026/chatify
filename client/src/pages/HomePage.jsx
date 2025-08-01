import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const HomePage = () => {
  const [selectedUser, SetSelecedUser]=useState(false);
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] '>
      <div className ={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative md:grid-cols-2 ${selectedUser? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
        <Sidebar selectedUser={selectedUser} setSelectedUser={SetSelecedUser}/>
        <ChatContainer selectedUser={selectedUser} setSelectedUser={SetSelecedUser}/>
        <RightSidebar selectedUser={selectedUser} setSelectedUser={SetSelecedUser}/>
      </div>
    </div>
  )
}

export default HomePage
// https://youtu.be/tTCam8KGVRE?list=PLjwm_8O3suyOFd8LTFqgw9v7MqPNtgINA