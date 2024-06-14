import { data } from './mockData';

export const fetchData = async (): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
