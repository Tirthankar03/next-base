import Link from "next/link";
import React from "react";

async function page() {
  //server component
  //fetch data
  //normally fetch() is not used, you directly access your db
  //no need to use useEffect like react and vite app
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default page;
