import { writeFile } from 'fs'
import { connectToDB } from '../../../../lib/mongodb/mongoose'
import Post from '../../../../lib/models/Post'


export const GET = async (req, { params }) => {
    try {
        await connectToDB()

        const post = await Post.findById(params.id).populate('creator likes').exec()
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Fail to get post by id", { status: 500})
    }
}

export const POST = async(req, { params }) => {
    const path = require("path")
    const currentWorkingDirectory = process.cwd()

    try {

        await connectToDB()

        const data = await req.formData()

        let postPhoto = data.get("postPhoto")

        if (typeof postPhoto != "string") {
            
            const bytes = await postPhoto.arrayBuffer()
            const buffer = Buffer.from(bytes)
    
            const postPhotoPath = path.join(
                currentWorkingDirectory,
                "public",
                "uploads",
                postPhoto.name
            )
    
            await writeFile(postPhotoPath, buffer)
    
            postPhoto = `/uploads/${postPhoto.name}`
    
        }

        const post = await Post.findByIdAndUpdate(
            params.id,
            {
                caption: data.get("caption"),
                tag: data.get("tag"),
                postPhoto: postPhoto,
            },
            { new: true, useFindAndModify: false }
        )

        await post.save()

        return new Response(JSON.stringify(newPost), { status: 200})
    }
    catch (error) {
        console.log(error);
        return new Response("Failed to update the post", { status: 500})
    }


}


export const DELETE = async (req, { params }) => {

    try {
        await connectToDB()

        const post = await Post.findByIdAndDelete(params.id)

        return new Response("Post is deleted", { status: 200})
        
    } catch (error) {
        console.log(error);
        return new Response("Failed to delete the post", { status: 500})
    }
}