import fetch from '@/utils/request';
import useSWR from 'swr';

export function useTestApi() {
  const { data, error } = useSWR(
    {
      url: '/test',
    },
    fetch,
    {
      revalidateOnFocus: true, //窗口聚焦时自动重新验证
      revalidateIfStale: true, //即使存在陈旧数据，也自动重新验证
    }
  );

  return {
    data,
    error,
  };
}
