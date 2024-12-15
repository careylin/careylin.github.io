import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: 'docs',   // Change output directory to docs
  images: {
    unoptimized: true, // Required for static export
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  basePath: process.env.NODE_ENV === 'production' ? '/careylin.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/careylin.github.io/' : '',
};

export default withMDX(nextConfig); 