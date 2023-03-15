import { Notice, NoticeListResponse } from '../interfaces/service';
import { API_URLS } from './../constants/apiUrls';
import { CreateNoticeRequest } from './../interfaces/service';
import http from './instance';

export const getNoticeList = async () => {
  try {
    const { pageResponse }: NoticeListResponse = await http.get(
      API_URLS.SERVICE.NOTICE.ITEM
    );
    return pageResponse.content;
  } catch (error) {
    console.error(error);
  }
};

export const getNoticeDetail = async (id: number) => {
  try {
    const data: Notice = await http.get(API_URLS.SERVICE.NOTICE.DETAIL(id));
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNotice = async (data: CreateNoticeRequest) => {
  try {
    await http.post(API_URLS.SERVICE.NOTICE.ITEM, data);
  } catch (error) {
    console.error(error);
  }
};

export const updateNotice = async (id: number, data: CreateNoticeRequest) => {
  try {
    await http.put(API_URLS.SERVICE.NOTICE.DETAIL(id), data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteNotice = async (id: number) => {
  try {
    await http.delete(API_URLS.SERVICE.NOTICE.DETAIL(id));
  } catch (error) {
    console.error(error);
  }
};
