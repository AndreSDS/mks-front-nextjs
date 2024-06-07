"use server";

import { IProduct, IProductResponse } from "@/interfaces/IProduct";
import { api, defaulQueryParams } from "./api";

export async function getProducts(): Promise<IProduct[]> {
  try {
    const { data } = await api.get<IProductResponse>("/", {
      params: defaulQueryParams,
    });

    return data.products;
  } catch (error) {
    return [];
  }
}
