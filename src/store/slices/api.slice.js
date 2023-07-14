import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DATA_URL } from '../../services';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: DATA_URL,
  }),
  endpoints: (builder) => ({
    getUserSearchBooks: builder.query({
      query: (search) => {
        return `?${search}`;
      },
    }),
  }),
});

export const { useGetUserSearchBooksQuery } = apiSlice;
