import { connectToDB } from '../../../lib/mongodb/mongoose'   
import Post from '../../../lib/models/Post'
export const GET = async (req, res) => {
    try {
        await connectToDB()

        const feedPosts = await Post.find().populate("creator likes").exec()

        return new Response(JSON.stringify(feedPosts), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all Feed Posts", { status: 500})
        
    }
}