import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

//Created a GitHub authentication sync using nextauth.

//We can use async component as this is server component.
const Navbar = async () => {
  const session = await auth();
  return (
    <header>
      <nav className="flex justify-between items-center bg-white px-2 py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={350}
            height={200}
            className=" rounded-3xl"
          />
        </Link>
        <div className="flex gap-5 items-center text-black font-bold font-serif">
          {session && session?.user ? (
            <>
              <Link className="text-lg" href={`user/${session.user?.id}`}>
                {session.user?.name}
              </Link>

              <button className="bg-blue-600 text-white  h-10 w-20 rounded-md text-lg text-center">
                <Link href="/startup/create">Create</Link>
              </button>

              {/* This is a React feature to allow creating interative element like button, which should be a client side element because we need to handle onclick event, in server component. we create a form and in the action, we pass a function that will be executed when the submit type button is pressed.*/}
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  className=" bg-[#dc3d62] text-white h-10 w-20 rounded-md text-lg hover:cursor-pointer"
                  type="submit"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button
                  className=" bg-[#dc3d62] text-white h-10 w-20 rounded-md text-lg mr-5 hover:cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
