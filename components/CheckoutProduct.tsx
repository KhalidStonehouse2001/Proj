import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { ProductType } from "../typings";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
interface Props {
  items: ProductType[];
  id: string;
}

function CheckoutProduct({ id, items }: Props) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.error(`${items[0].title} removed from basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex flex-col pb-5 border-b border-gray-300 gap-x-4 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
      <div className="flex items-end flex-1 lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col text-xl gap-x-8 lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end font-semibold gap-x-1">
              {items.length}
              <ChevronDownIcon className="w-6 h-6 text-blue-500" />
            </p>
          </div>
          <p className="flex items-end text-blue-500 cursor-pointer hover:underline">
            Show product details <ChevronDownIcon className="w-6 h-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={items.reduce((total, item) => (total += item.price), 0)}
              currency="GBP"
            />
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;