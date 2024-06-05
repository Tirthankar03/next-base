import React from 'react'
import { createPost } from '../actions/action'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function page() {
  //using auth in individual page looks messy, use middleware
  const {isAuthenticated} = getKindeServerSession()

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login?post_login_redirect_url=http://localhost:3000/create-post')
  }


  return (
    <main className='text-center pt-16'>
        <h1 className="text-5xl font-semibold mb-7">Create post</h1>

        <form action={createPost}
        //action newly used
        //createPost is a function that would only run in the server (server action)
        // onSubmit={() => {fetch('/api/posts')} } old way of doing things
        className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'>
            <input className='border rounded-full px-3 h-10' type="text" name='title' placeholder='title for new post' required />
            <textarea name='body' placeholder='body content for post' className='border  rounded px-3 py-2' rows={10} required/>
            <button className='h-10 bg-blue-500 px-5 rounded text-white'>Submit</button>
        </form>
        <LogoutLink>Logout</LogoutLink>
    </main>
  )
}
