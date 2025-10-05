const fs = require('fs');
const path = require('path');

const env = process.env.TEST_ENV || 'dev';
const filePath = path.resolve(__dirname, `${env}.env.json`);
const fileConfig = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Allow overriding baseURL via environment variables for ad-hoc runs
const envBaseUrl = process.env.BASE_URL || process.env.TEST_BASE_URL;
const config = Object.assign({}, fileConfig, {});
if (envBaseUrl) {
	config.baseURL = envBaseUrl;
}

module.exports = config;
