import puppeteer from 'puppeteer';
import getCredentials from './credentials';
import log from './log';

const checkBalance = async () => {
  // Get Settings from Database
  const { number, password } = await getCredentials();

  if (number === undefined && password === undefined) {
    return;
  }

  let balance;

  // Complete a balance check
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.aldimobile.com.au/login/', { waitUntil: 'domcontentloaded' });
    await page.type('#login_user_login', process.env.ALDI_TEST_MOBILE || number);
    await page.type('#login_user_password', process.env.ALDI_TEST_PASSWORD || password);
    await page.click('#login_user_save');
    await setTimeout(() => {}, 3000);
    balance = await page.evaluate(() =>
      parseFloat(document.querySelector('#balance-display > div.row.clearfix.symfony_display_real_credit > div').innerText.replace(/\$/, ''))
    );
    await browser.close();
  } catch (err) {
    console.error(`💥 There was an issue completing a balance check: ${err}`);
    return;
  }

  console.log(`${new Date()} - Balance check complete, current balance is $${balance.toFixed(2)}`);

  // await log();

  return balance;
};

export default checkBalance;
