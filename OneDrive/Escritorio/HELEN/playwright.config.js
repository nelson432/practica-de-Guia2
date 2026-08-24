const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testMatch: '**/*.spec.js'
});