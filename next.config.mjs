/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', // Hier fügst du die distDir Eigenschaft hinzu
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",

            },
        ],
    },
}

export default nextConfig
