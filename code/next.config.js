module.exports = {
  headers: async () => {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com;",
          },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
    ];
  },
  poweredByHeader: false,
  target: "serverless",
};
