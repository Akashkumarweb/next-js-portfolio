/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        // Specifies domains from which images can be loaded
        domains: ['ctfmcoptba.cloudimg.io'],
        // Preferred image formats for optimization
        formats: ['image/avif', 'image/webp'],
        unoptimized: true
    },
};


export default nextConfig;
