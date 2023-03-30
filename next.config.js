/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/landingpage',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
