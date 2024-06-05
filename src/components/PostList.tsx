import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function PostList() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // const res = await fetch("https://dummyjson.com/posts?limit=10");
    // const data = await res.json();

    //can use your db directly
    const posts = await prisma.post.findMany()
  
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
