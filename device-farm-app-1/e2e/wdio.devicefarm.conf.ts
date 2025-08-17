import type { Options } from '@wdio/types';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./tests/**/*.spec.ts'],
  maxInstances: 1,
  logLevel: 'info',

  capabilities: [{
    platformName: process.env["DEVICEFARM_DEVICE_PLATFORM_NAME"] ?? 'Android',
    'appium:automationName':
      process.env["DEVICEFARM_DEVICE_PLATFORM_NAME"] === 'iOS' ? 'XCUITest' : 'UiAutomator2',
    'appium:app': process.env["DEVICEFARM_APP_PATH"] ?? '../app-debug.apk',
    'appium:newCommandTimeout': 300
  }],

  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
}