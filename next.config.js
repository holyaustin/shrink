const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.r2.dev',
                port: '',
                pathname: '/generations/**',
            },
        ],
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
        return config;
    },
}

module.exports = withPWA(nextConfig);
