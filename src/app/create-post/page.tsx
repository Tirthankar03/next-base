import React from 'react'
import { createPost } from '../actions/action'

export default function page() {
  return (
    <main className='text-center pt-16'>
        <h1 className="text-5xl font-semibold mb-7">Create post</h1>

        <form action={createPost}
        //action newly used
        //createPost is a function that would only run in the server (server action)
        // onSubmit={() => {fetch('/api/posts')} } old way of doing things
        className='h-10 space-x-2 mt-10'>
            <input className='border rounded-full px-3 mx-3 h-full' type="text" name='title' placeholder='title for new post' required />
            <button className='h-full bg-blue-500 px-5 rounded text-white'>Submit</button>
        </form>
    </main>
  )
}
