/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["api.generatoruz.com"],
      },
};

module.exports = nextConfig;
