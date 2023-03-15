import { Notice, NoticeListResponse } from '../interfaces/service';
import { API_URLS } from './../constants/apiUrls';
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
