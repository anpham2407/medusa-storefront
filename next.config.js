const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const withNextIntl = require("next-intl/plugin")("./src/i18n.js")

module.exports = withNextIntl(
  withStoreConfig({
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: [
        "@medusajs/product",
        "@medusajs/modules-sdk",
      ],
    },
    features: store.features,
    reactStrictMode: true,
    images: {
      domains: [
        "medusa-public-images.s3.eu-west-1.amazonaws.com",
        "localhost",
        "medusa-server-testing.s3.amazonaws.com",
      ],
    },
  })
)

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
