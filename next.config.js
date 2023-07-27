/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
	},
	swcMinify: false,
	experimental: {
		serverComponentsExternalPackages: ['cloudinary', 'graphql-request'],
	},
};

module.exports = nextConfig;
