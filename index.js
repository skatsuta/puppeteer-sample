const puppeteer = require('puppeteer');
const { username, password } = require('./creds');

const URL = 'https://github.com/login';
const USERNAME_SELECTOR = '#login_field';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#login form input[type="submit"]';

async function run() {
  console.log('==> Launching a browser...');

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  console.log(`==> Visiting ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2' });

  console.log('==> Signing in using login information...');

  await page.type(USERNAME_SELECTOR, username);
  await page.type(PASSWORD_SELECTOR, password);
  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  console.log('==> Hacking the page...');
  await page.evaluate(() => {
    document.body.style = 'background-color: red;';
  });

  console.log('==> Taking a screenshot...');
  const title = await page.title();
  const filename = `${title}.png`;
  await page.screenshot({ path: filename });
  console.log(`Done successfully! ${filename} has been generated.`);

  await browser.close();
}

run().catch(console.error);
