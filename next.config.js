/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
    NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().valueOf(),
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*' }, // any image hosts are welcome
      { protocol: 'https', hostname: 'unresolved' }, // For cases where the data obtained are unresolved
    ],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
  headers: async () => [
    {
      // https://nextjs.org/docs/advanced-features/security-headers
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "base-uri 'self'; font-src 'self'; form-action 'self'; frame-ancestors 'self' https://uniform.app; img-src 'self' https: data:; object-src 'none'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests '",
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'No-Referrer',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'Custom-Uniform',
          value: 'uni-header',
        },
        {
          key: 'Cross-Origin-Embedder-Policy',
          value: 'unsafe-none',
        },
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin',
        },
        {
          key: 'Cross-Origin-Resource-Policy',
          value: 'same-origin',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
