/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
