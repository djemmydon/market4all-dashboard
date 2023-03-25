import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../typing";

export const apiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://commerce-backend-rho.vercel.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductType, void>({
      query: () => `product`,
    }),
    createLogin: builder.mutation({
      query: (log) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `auth/login`,
        method: "POST",
        body: log,
      }),
    }),
  }),
});
