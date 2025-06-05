import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', 
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
}
 
export default config