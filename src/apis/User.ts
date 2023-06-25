import { API_URLS } from './../constants/apiUrls';
import { UserListResponse } from './../interfaces/user';
import http from './instance';

interface UserListParams {
  page: number;
  size: number;
  sort?: string;
  keyword?: string;
  startedAt?: string;
  endedAt?: string;
}

export const userList = async (params: UserListParams) => {
  try {
    const {
      data: { accountList },
    }: UserListResponse = await http.get(API_URLS.USER.LIST, {
      params: params,
    });
    return accountList;
  } catch (error) {
    console.error(error);
  }
};

export const userSearch = async (params: UserListParams) => {
  try {
    const {
      data: { accountList },
    }: UserListResponse = await http.get(API_URLS.USER.SEARCH, {
      params: params,
    });
    return accountList;
  } catch (error) {
    console.error(error);
  }
};

export const updateStatus = async (id: string) => {
  try {
    await http.put(API_URLS.USER.STATUS(id));
  } catch (error) {
    console.error(error);
  }
};
