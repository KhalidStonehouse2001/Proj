import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";

function Basket() {
  const items = useSelector(selectBasketItems);
  if (items.length === 0) return null;
  return (
    <Link href={"/checkout"}>
      <div className="fixed z-50 flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full bottom-10 right-10 cursor pointer">
        {items.length > 0 && (
          <span className="absolute z-50 flex items-center justify-center rounded-full -right-2 -top-2 h-7 w-7 bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="w-8 h-8 headerIcon" />
      </div>
    </Link>
  );
}

export default Basket;
