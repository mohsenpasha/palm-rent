export async function getData(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
}