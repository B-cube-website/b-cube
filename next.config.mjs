/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NAMESPACE: process.env.NAMESPACE,
    BUCKET_NAME: process.env.BUCKET_NAME,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

export default nextConfig;
