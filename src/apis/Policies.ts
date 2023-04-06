import { API_URLS } from '../constants/apiUrls';
import http from './instance';

export const terms = async () => {
  try {
    const data = await http.get(API_URLS.POLICY.TEMRS);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const personal = async () => {
  try {
    const data = await http.get(API_URLS.POLICY.PERSONAL);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const location = async () => {
  try {
    const data = await http.get(API_URLS.POLICY.LOCATION);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const age = async () => {
  try {
    const data = await http.get(API_URLS.POLICY.AGE);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const marketing = async () => {
  try {
    const data = await http.get(API_URLS.POLICY.MARKETING);
    return data;
  } catch (error) {
    console.error(error);
  }
};
