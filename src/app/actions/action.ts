'use server'
export async function createPost(formData: FormData) {
    const title = formData.get('title') as string
    console.log('title', title);
    //this console log will only appear in the terminal

    //update db
    // await prisma.post.create({
    //     data: {
    //         title
    //     }
    // })
}