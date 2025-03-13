export const VALUES: {
    BACKEND_API_URL: string;
} = {
    BACKEND_API_URL: import.meta.env.VITE_BACKEND_API_URL || "http://127.0.0.1:5000/api/"
};