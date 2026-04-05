export const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // Browser should use relative path
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR on Vercel
    return `http://localhost:${process.env.PORT || 3001}`; // Local SSR
};
