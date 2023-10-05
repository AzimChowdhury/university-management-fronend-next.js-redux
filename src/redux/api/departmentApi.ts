import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { BaseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartment: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useGetDepartmentQuery, useAddDepartmentMutation } =
  departmentApi;
