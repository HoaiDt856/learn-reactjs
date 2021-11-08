import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = `/auth/local/register`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
