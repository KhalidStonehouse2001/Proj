import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between w-full bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative w-5 h-10 transition opacity-75 cursor-pointer hover:opacity-100">
            <Image
              src={"https://rb.gy/vsvv2o"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="items-center justify-center flex-1 hidden space-x-8 md:flex">
        <a href="https://www.apple.com/services/" className="headerLink">
          Product
        </a>
        <a href="https://www.apple.com/services/" className="headerLink">
          Explore
        </a>
        <a href="https://support.apple.com/" className="headerLink">
          Support
        </a>
        <a href="https://www.apple.com/services/" className="headerLink">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute z-50 flex items-center justify-center w-4 h-4 rounded-full -right-1 -top-1 bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            alt=""
            width={34}
            height={34}
            className="rounded-full cursor-pointer"
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon " onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
}

export default Header;
