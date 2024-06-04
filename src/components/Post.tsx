import React, { useState } from "react";

export default async function Post({id}: {id: string}) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await res.json();

    //beginners will be very tempted to use 'use client' but you'll lose all the features of server comp
      //can't keep large dependencies on the server 
      //using secrets on the server side 
      //interacting with the db directly
    //best fix: create a seperate component 

    const [upvoteCount, setUpvoteCount] = useState(0)
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className=" max-w-[700px] mx-auto">{post.body}</p>

      <button onClick={() => {setUpvoteCount(upvoteCount + 1)}} className="bg-blue-500 text-white p-2 mt-10">Upvote</button>
    </div>
  );
}
