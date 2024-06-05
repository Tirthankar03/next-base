'use server'
export async function createPost(formData: FormData) {
    const title = formData.get('title') as string
    const body = formData.get('body') as string
    console.log('title', title);
    console.log('body', body);
    //this console log will only appear in the terminal

    //update db
    // await prisma.post.create({
    //     data: {
    //         title
    //     }
    // })
}