/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" https://nextjs.org/docs/messages/swc-disabled
// 이 에러때문에 넣은 것
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};
