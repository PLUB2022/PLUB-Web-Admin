import { NoticeListResponse } from '../interfaces/service';
import { API_URLS } from './../constants/apiUrls';
import http from './instance';

export const getNoticeList = async () => {
  try {
    const { pageResponse }: NoticeListResponse = await http.get(
      API_URLS.SERVICE.NOTICE.ITEM
    );
    return pageResponse;
  } catch (error) {
    console.error(error);
  }
};
