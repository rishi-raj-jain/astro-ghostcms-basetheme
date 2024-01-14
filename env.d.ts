/// <reference types="vite/client" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENT_API_URL: string;
  readonly CONTENT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
