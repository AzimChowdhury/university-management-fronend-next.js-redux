import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { BaseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
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
    // get single
    getSingleDepartment: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    // create
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    // update
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    // delete single
    deleteSingleDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useGetSingleDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteSingleDepartmentMutation,
} = departmentApi;
