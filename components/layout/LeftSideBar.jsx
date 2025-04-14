"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import { UserButton, SignedIn, SignOutButton, useUser } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import Loader from "@/components/Loader"

const LeftSideBar = () => {
  const { user, isLoaded } = useUser()

  const [loading, setLoading] = useState(true)

  const [userData, setUserData] = useState({})

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`)
    const data = await response.json()

    setUserData(data)
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  return loading || !isLoaded ? <Loader /> : (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>
      {userData._id.posts?.length && (
        <Link href={`/profile/${userData._id/posts}`}>
          <img src="/assets/logo.png" alt="logo" width={200} height={200}/>
        </Link>
      )}
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="/">
            <Image src={userData?.profilePhoto} 
              alt="profile photo" width={50} height={50} className='rounded-full' 
            />
          </Link>
          <p className="text-small-bold">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div className='flex text-light-1 justify-between'>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.posts?.length}</p>
            <div className="text-tiny-medium">Posts</div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <div className="text-tiny-medium">Followers</div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <div className="text-tiny-medium">Following</div>
          </div>
        </div>

        <hr />

        <Menu />

        <hr />

        <div className='flex gap-4 items-center'>
          <UserButton appearance={{ baseTheme: dark }}/>
          <p className='text-light-1 text-body-bold'>Manage Account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer gap-4 items-center'>
              {/* <Logout sx={{ color: "white", fontSize: "32px"}} /> */}
              <p className='text-body-bold text-light-1'>Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  )
}

export default LeftSideBar