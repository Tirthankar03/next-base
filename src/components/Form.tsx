import { createPost } from '@/app/actions/action'
import React from 'react'

export default function Form() {
  return (
    <form action={createPost}
    //action newly used
    //createPost is a function that would only run in the server (server action)
    // onSubmit={() => {fetch('/api/posts')} } old way of doing things
    className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'>
        <input className='border rounded-full px-3 h-10' type="text" name='title' placeholder='title for new post' required />
        <textarea name='body' placeholder='body content for post' className='border  rounded px-3 py-2' rows={10} required/>
        <button className='h-10 bg-blue-500 px-5 rounded text-white'>Submit</button>
    </form>
  )
}
