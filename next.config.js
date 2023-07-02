/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config) => {
      config.module.rules.push({
         test: /\.md$/,
         use: [
            {
               loader: "frontmatter-markdown-loader",
               options: { mode: ["react-component"] },
            },
         ],
      });
      return config;
   },
};

module.exports = nextConfig;
