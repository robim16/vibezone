import User from "../../../lib/models/User"
import { connectToDB } from "../../../lib/mongodb/mongoose"

export const GET = async (req) => {
    try {
        await connectToDB()

        const allUsers = await User.find().populate("posts savedPosts likedPosts followers following").exex()
    
        return Response(JSON.stringify(allUsers), { status: 200})
    } catch (error) {
        return new Response("Failed to get all user",  { status: 500})
    }
}