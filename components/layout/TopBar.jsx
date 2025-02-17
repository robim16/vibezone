import React from 'react'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        <input type="text" className='search-bar'/>
      </div>
      <button>Create A Post</button>
    </div>
  )
}

export default TopBar