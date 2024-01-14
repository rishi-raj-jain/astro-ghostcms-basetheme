/// <reference types="vite/client" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GHOST_URL: string;
  readonly PUBLIC_GHOST_KEY: string;
  readonly CONTENT_API_URL: string;
  readonly CONTENT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
