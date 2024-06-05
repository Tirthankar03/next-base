import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  //checks for auth token
  return withAuth(req);
}

export const config = {
  //specify routes that you want to protect
  matcher: ["/create-post"],
};
