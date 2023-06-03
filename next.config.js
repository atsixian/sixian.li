/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const mdx = require('@next/mdx')()
const { withContentlayer: contentlayer } = require('next-contentlayer')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withPlugins([mdx, contentlayer, bundleAnalyzer], nextConfig)
