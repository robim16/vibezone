"use client"

import { useEffect, useState } from 'react'
import Loader from "../../../components/Loader"
import PostCard from "../../../components/cards/PostCard"

const LikedPosts = () => {
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
    }, [])

  return loading || !isLoaded ? <Loader /> : (
    <div className='flex flex-col gap-9'>
      {userData?.likedPosts?.map((post) => (
        <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getUser} />
      ))}
    </div>
  )
}

export default LikedPosts