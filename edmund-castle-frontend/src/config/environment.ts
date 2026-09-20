export const environment = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api",
  siteUrl: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
  isProduction: import.meta.env.PROD,
} as const;
