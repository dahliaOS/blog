/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
});
