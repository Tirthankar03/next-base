import React from 'react'
import { createPost } from '../actions/action'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import Form from '@/components/Form';

export default async function page() {
  //using auth in individual page looks messy, use middleware
  const {isAuthenticated} = getKindeServerSession()

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login?post_login_redirect_url=http://localhost:3000/create-post')
  }


  return (
    <main className='text-center pt-16'>
        <h1 className="text-5xl font-semibold mb-7">Create post</h1>

        <Form/>
        <LogoutLink>Logout</LogoutLink>
    </main>
  )
}
