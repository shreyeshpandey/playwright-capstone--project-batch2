import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    timeout: 60000,

    retries: 1,

    workers: 2,

    reporter: 'html',

    use: {
        baseURL: 'https://automationpracticehub.com/',

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on'
    }
});