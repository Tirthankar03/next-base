//added use client finally
'use client'
import React, { useState } from 'react'


//always make sure to add client components at the other edges of the component tree
export default function UpvoteBtn() {
    const [upvoteCount, setUpvoteCount] = useState(0)

  return (
    <button onClick={() => {setUpvoteCount(upvoteCount + 1)}} className="bg-blue-500 text-white p-2 mt-10">Upvote {upvoteCount}</button>

  )
}
