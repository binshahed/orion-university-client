import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import { logout, setUser } from "../features/auth/authSlice";
import { message } from "antd";
import { TError } from "../../../types/error.Type";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  }
});

const BaseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // call api
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    console.log(result.error);
    message.error((result?.error as TError)?.data?.message as string);
  }

  // if token is expired
  if (result.error?.status === 401) {
    // call for refresh token
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include"
    });
    const data = await res.json();
    // check is access token is exist
    if (data?.data?.accessToken) {
      // find user from redux store
      const user = (api.getState() as RootState).auth.user;
      // call for new access token
      api.dispatch(
        setUser({
          user: user,
          token: data.data.accessToken
        })
      );
      // failed api login call again
      result = await baseQuery(args, api, extraOptions);
    } else {
      // if refresh token is expired, logout user
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseQueryWithRefreshToken,
  tagTypes: ["AcademicSemester"],
  endpoints: () => ({})
});
