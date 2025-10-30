'use client';

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateURL = useCallback((updates = {}, removes = []) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    removes.forEach(key => params.delete(key));

    const newQuery = params.toString();
    const newURL = `${pathname}${newQuery ? '?' + newQuery : ''}`;
    
    router.push(newURL, { scroll: false });

  }, [router, pathname, searchParams]);

  return { updateURL };
}