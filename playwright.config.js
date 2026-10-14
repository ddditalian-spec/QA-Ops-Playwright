// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './JS Tests',
  timeout: 40000,
  expect:{
    timeout: 5000
  }, 
  reporter:'html',
  use:
  {//by default timesout is 30 seconds
    browserName:'chromium',
    headless: 'false'

  },
  /* Run tests in files in parallel */
  
  // @ts-ignore
  };
  module.exports = config;