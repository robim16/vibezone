import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>
      <Link>
        <img src="/assets/logo.png" alt="logo" width={200} height={200}/>
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">

        </div>
      </div>
    </div>
  )
}

export default LeftSideBar