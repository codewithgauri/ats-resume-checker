/** @type {import('next').NextConfig} */
const nextConfig = {};


module.exports = {
    images: {
      domains: ['aceternity.com','images.unsplash.com'],
    },
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      config.externals.push({ canvas: 'commonjs canvas' })
      return config
    },
  };


  
  

  