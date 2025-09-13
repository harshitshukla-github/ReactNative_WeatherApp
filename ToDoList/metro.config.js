// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Enable resolving .mjs files for `wa-sqlite`.
config.resolver.sourceExts.push('mjs');

// Enable resolving .wasm files for `wa-sqlite`.
config.resolver.assetExts.push('wasm');

module.exports = config;