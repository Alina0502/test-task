import { Config } from "protractor";

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
        args: [ "--start-maximized" ]
    }
  },
  specs: [
    "Tests/*.js",
  ]
};