const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Define your target URL, where you want to forward your requests
const target = "http://example.com";

// Create a proxy middleware instance
const proxyMiddleware = createProxyMiddleware({
  target,
  changeOrigin: true, // Changes the origin of the host header to the target URL
  // Optionally, you can add more configurations here
});

// Apply the proxy middleware to your Express app
app.use("/api", proxyMiddleware); // This will forward requests from '/api' to your target URL

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
