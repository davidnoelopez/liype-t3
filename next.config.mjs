/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    // providing the locales supported by your application
    locales: ["es-MX", "en-US"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "es-MX",
    localeDetection: false,
  },
};
export default config;
