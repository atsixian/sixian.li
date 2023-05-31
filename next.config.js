/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')

const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(withMDX(nextConfig))
