import type { NextConfig } from "next";

const nextConfig:NextConfig = {
   
}

module.exports = {
  images: {
    remotePatterns: [new URL('http://localhost:3000/**')],
  },

  
}

/*interface Props {
  buildId: any; 
  dev:any; 
  isServer:any;
  defaultLoaders:any; 
  Webpack:any;  
}

const nextConfig = {
  reactStrictMode: false,
  webpack: (config:any, { buildId, dev, isServer, defaultLoaders, Webpack }:Props) => {
    config.plugins.push(new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
    return config;
  }
}*/

export default nextConfig;
