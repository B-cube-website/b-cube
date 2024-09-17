/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Oracle Cloud 관련 백엔드 설정
    OCI_NAMESPACE: process.env.ORACLE_CLOUD_NAMESPACE || "axsqxeygavsg",
    OCI_BUCKET_NAME:
      process.env.ORACLE_CLOUD_BUCKET_NAME || "bucket-20240822-2258",
    OCI_USER_ID:
      process.env.ORACLE_CLOUD_USER_ID ||
      "ocid1.user.oc1..aaaaaaaaxfekhuubhlqhneuftk4aprbndgodq3dfixy4aif2adjze6f5iplq",
    OCI_FINGERPRINT:
      process.env.ORACLE_CLOUD_FINGERPRINT ||
      "f0:0c:07:b4:c6:af:19:72:a7:c9:db:3d:28:8c:f0:0c",
    OCI_PRIVATE_KEY_FILE_PATH:
      process.env.ORACLE_CLOUD_PRIVATE_KEY_FILE_PATH ||
      "/home/ubuntu/oci_api_key.pem",
    OCI_TENANCY_ID:
      process.env.ORACLE_CLOUD_TENANCY_ID ||
      "ocid1.tenancy.oc1..aaaaaaaaotkd6ok43jubqp5qu3dx47xbq7x2xgep74e64jlc7c3coppzd4va",
    OCI_REGION: process.env.ORACLE_CLOUD_REGION || "ap-chuncheon-1",
    OCI_BUCKET_URL:
      process.env.ORACLE_CLOUD_BUCKET_URL ||
      "https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/axsqxeygavsg/b/bucket-20240822-2258",

    // 프론트엔드에서 사용하는 API 호스트
    NEXT_PUBLIC_API_HOST:
      process.env.NEXT_PUBLIC_API_HOST || "http://129.154.60.64:8080",

    // Webpack 설정 (필요 시)
    // webpack: (config) => {
    //   config.module.rules.push({
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: ['@svgr/webpack'],
    //   });
    //   return config;
    // },
  },
};

export default nextConfig;
