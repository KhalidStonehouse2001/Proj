// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Category, ProductType } from "../../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
type Data = {
  products: ProductType[];
};
const query = groq`*[_type == 'product'] {
    _id, 
    ...
  }| order(_createdAt desc)`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await sanityClient.fetch(query);

  res.status(200).json({ products });
}
