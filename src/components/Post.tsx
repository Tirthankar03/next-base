import React from "react";

export default async function Post({id}: {id: string}) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await res.json();
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className=" max-w-[700px] mx-auto">{post.body}</p>
    </div>
  );
}
