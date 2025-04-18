import { connectToDB } from "../../../../../lib/mongodb/mongoose"
import User from "../../../../../lib/models/User"

export const GET = async (req, { params }) => {
    const { query } = params

    try {
        await connectToDB()

        const searchedUsers = await User.find({
            $or: [
                { username: { $regex: query, $options: "i" }},
                { firstName: { $regex: query, $options: "i"}},
                { lastName: { $regex: query, $options: "i"}}
            ]

        }).populate("post savedPosts likedPosts followers following").exec()

        return new Response(JSON.stringify(searchedUsers), { status: 200})
    } catch (error) {
        console.log(error);
        return new Response("Failed to get users by search", { status: 500 })
    }
}