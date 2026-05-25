import React from 'react'
import UserSidebar  from './UserSidebar'
import MessageContainer from './MessageContainer'



export const Home = () => {
  return (
    <div className='flex'>
      <UserSidebar />
      <MessageContainer />
    </div>
  )
}
