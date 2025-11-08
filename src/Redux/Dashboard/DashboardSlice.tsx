import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetDashboardRequest, GetDashboardResponse } from "./DashboardTypes";
import { configURL } from "@/Config/config";

export const DashboardSlice = createApi({
  reducerPath: "DashboardSlice",
  baseQuery: fetchBaseQuery({ baseUrl: configURL.url }),
  endpoints: (build) => ({
    GetDashboard: build.query<GetDashboardResponse, GetDashboardRequest>({
      query: ({ id, parcelCountMonth, parcelCountYear, transactionStatsYear, revenueYear, Token }) => ({
        url: `/api/dashboard?id=${id}&parcelCountMonth=${parcelCountMonth}&parcelCountYear=${parcelCountYear}&transactionStatsYear=${transactionStatsYear}&revenueYear=${revenueYear}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }),
    }),
  }),
});

export const { useGetDashboardQuery } = DashboardSlice;
