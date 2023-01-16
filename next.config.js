/** @type {import('next').NextConfig} */
module.exports = {
   async rewrites() {
      return {
         fallback: [
            {
               source: "/api/v1/:path*",
               destination: `http://localhost:3001/api/v1/:path*`,
            },
         ],
      };
   },
   eslint: {
      dirs: ["src"],
   },
   sass: true,
   modules: true,
   // Uncoment to add domain whitelist
   images: {
      domains: ["placewaifu.com", "placecorgi.com", "cdn.myanimelist.net"],
   },
   useFileSystemPublicRoutes: false,
};
