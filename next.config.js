/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig

// loader for video files
const withVideos = require('next-videos')

module.exports = withVideos()
