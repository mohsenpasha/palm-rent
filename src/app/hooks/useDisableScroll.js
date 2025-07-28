import { useEffect } from "react";

export default function useDisableScroll() {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden"; // ⛔️ اسکرول غیرفعال

    return () => {
      document.body.style.overflow = originalStyle; // ✅ بازگرداندن به حالت قبل
    };
  }, []);
}
