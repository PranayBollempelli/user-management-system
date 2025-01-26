import axiosInstance from '../axios';

export const getUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

export const addUser = async (userData) => {
  const response = await axiosInstance.post('/users', {
    ...userData,
    id: Date.now() // Temporary ID for local state
  });
  return response.data;
};

export const editUser = async (userId, userData) => {
  const response = await axiosInstance.put(`/users/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  await axiosInstance.delete(`/users/${userId}`);
  return userId;
};