// hooks/useAddQueryParam.ts
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export function useAddQueryParam() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const addQueryParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const removeQueryParam = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return { addQueryParam, removeQueryParam };
}