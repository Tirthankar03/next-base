import Post from '@/components/Post'
import React, { Suspense } from 'react'

 async function Page({ params }: { params: { id: string } }) {

  return (
    <main className=' px-7 pt-24 text-pretty text-center bg-red-50'>
        <Suspense fallback='Loading...'>
        <Post id={params.id}/>
        </Suspense>
    </main>
  )
}

export default Page