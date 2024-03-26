import { createApi } from '@reduxjs/toolkit/query/react';
import axiosInstance from '../backend/index.ts';

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: async (args) => {
    const { data } = await axiosInstance.get(args);
    return { data };
  },
  endpoints: (builder) => ({
    getPaintingsByCountry: builder.query({
      query: (country) => `/paintings/${country}`,
    }),
  }),
});

export const { useGetPaintingsByCountryQuery } = paintingsApi;