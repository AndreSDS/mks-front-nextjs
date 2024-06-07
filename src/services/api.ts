import { IProduct, IProductResponse } from "@/interfaces/IProduct";
import axios from "axios";

const baseURL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products";

export const defaulQueryParams = {
  page: 1,
  rows: 8,
  sortBy: "id",
  orderBy: "DESC",
};

export const api = axios.create({
  baseURL,
});
