import axiosInstance from '../axios';

export const getUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

export const addUser = async (userData) => {
  const response = await axiosInstance.post('/users', userData);
  return response.data;
};

export const editUser = async (userId, userData) => {
  // Simulate the edit operation locally
  return { ...userData, id: userId };
};

export const deleteUser = async (userId) => {
  await axiosInstance.delete(`/users/${userId}`);
  return userId;
};