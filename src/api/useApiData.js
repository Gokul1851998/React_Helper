import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchUsers, fetchPosts, fetchHighVolumeRecords } from './apiClient';

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 mins cache
  });
};

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePostsQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
};

export const useHighVolumeQuery = (count = 10000) => {
  return useQuery({
    queryKey: ['highVolumeRecords', count],
    queryFn: () => fetchHighVolumeRecords(count),
    staleTime: 1000 * 60 * 10,
  });
};
