import { tagTypes } from "../tag-types";
import { BaseApi } from "./baseApi";

const DEPARTMENT_URL = "/academic-departments";

export const departmentApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
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

export const { useAddDepartmentMutation } = departmentApi;
