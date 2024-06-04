import PostList from "@/components/PostList";
import Link from "next/link";
import React, { Suspense } from "react";

async function page() {
  //server component
  //fetch data
  //normally fetch() is not used, you directly access your db
  //no need to use useEffect like react and vite app
  //make granular: data used in postlist
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
    <Suspense fallback="Loading...">
      <PostList />
    </Suspense>
    </main>
  );
}

export default page;
