"use client"

import { useEffect, useState } from 'react'
import Loader from "../../../components/Loader"
import UserCard from '../../../components/cards/UserCard'


const People = () => {
    const [loading, setLoading] = useState(true)

    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = async () => {
        const response = await fetch(`/api/user`)
        const data = await response.json()
        setAllUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return loading ? <Loader /> : (
        <div className='flex flex-col gap-4 py-6'>
            {allUsers?.map((user) => (
                <UserCard key={user.id} userData={user} update={getAllUsers}/>
            ))}
        </div>
    )
}

export default People