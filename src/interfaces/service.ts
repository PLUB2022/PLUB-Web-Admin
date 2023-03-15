export interface Notice {
  announcementId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoticeRequest {
  title: string;
  content: string;
}

export interface NoticeListResponse {
  pageResponse: {
    totalElements: number;
    last: boolean;
    content: Notice[];
  };
}
