console.log(">>> Remix config is being loaded!");


/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  server: "./netlify/functions/server.js",
  serverBuildTarget: "netlify",
  serverModuleFormat: "cjs", // Importante garantir que está em CommonJS
  ignoredRouteFiles: ["**/.*"],

  // Outras configs...
  tailwind: true,
  postcss: true,
};
