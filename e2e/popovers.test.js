import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(200000);

describe('Popover', () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
    server.kill();
  });

  test('should show on the page', async () => {
    await page.goto('http://localhost:4000/', { waitUntil: 'load' });
    await page.waitForSelector('.container');

    const buttons = await page.$$('.button');

    await buttons[0].click();

    await page.waitForSelector('.popover');
  });

  test('should hide on the page', async () => {
    await page.goto('http://localhost:4000/', { waitUntil: 'load' });
    await page.waitForSelector('.container');

    const buttons = await page.$$('.button');

    await buttons[0].click();
    await buttons[0].click();

    await page.waitForSelector('.popover', { hidden: true });
  });

  test('should show new popover and hide latest popover on the page', async () => {
    await page.goto('http://localhost:4000/', { waitUntil: 'load' });
    await page.waitForSelector('.container');

    const buttons = await page.$$('.button');

    await buttons[1].click();
    await page.waitForSelector('.popover');

    await buttons[2].click();
    // дождаться, что старый элемент с классом .popover не будет найден
    await page.waitForSelector('.popover');
    // дождаться, что новый элемент с классом .popover будет найден
    await page.waitForSelector('.popover', { timeout: 50000 });
  });
});
