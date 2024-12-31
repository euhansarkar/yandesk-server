module.exports = {
  apps: [
    {
      name: "yandex-server",
      script: "./dist/index.js",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
