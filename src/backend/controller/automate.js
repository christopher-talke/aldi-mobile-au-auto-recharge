import puppeteer from 'puppeteer';
import { database } from '../database';
import getCredentials from './credentials';

const checkBalance = async () => {
  // Get Settings from Database
  const { number, password } = await getCredentials();

  if (number === undefined && password === undefined) {
    return;
  }

  let balance;

  // Complete a balance check
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.aldimobile.com.au/login/', { waitUntil: 'domcontentloaded' });
    await page.type('#login_user_login', process.env.ALDI_TEST_MOBILE || number);
    await page.type('#login_user_password', process.env.ALDI_TEST_PASSWORD || password);
    await page.click('#login_user_save');
    await page.waitForSelector('#balance-display', {
      visible: true
    });
    balance = await page.evaluate(() =>
      parseFloat(document.querySelector('#balance-display > div.row.clearfix.symfony_display_real_credit > div').innerText.replace(/\$/, ''))
    );
    await browser.close();
  } catch (err) {
    console.error(`💥 There was an issue completing a balance check: ${err}\n\nTrying again...`);
    checkBalance();
  }

  // console.log(`${new Date()} - Balance check complete, current balance is $${balance.toFixed(2)}`);

  return balance;
};

const compareBalance = async currentBalance => {
  const { minimumValue } = await getMinimumValue();
  if (currentBalance > minimumValue) return false;
  return true;
};

const triggerRecharge = async () => {
  // Get Settings from Database
  const path = await getPickedOption();
  const { number, password } = await getCredentials();

  if (number === undefined && password === undefined) return;

  // Trigger a recharge
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.aldimobile.com.au/login/', { waitUntil: 'domcontentloaded' });
    await page.type('#login_user_login', process.env.ALDI_TEST_MOBILE || number);
    await page.type('#login_user_password', process.env.ALDI_TEST_PASSWORD || password);
    await page.click('#login_user_save');
    await page.waitForSelector('#balance-display', {
      visible: true
    });
    const account = await page.evaluate(() => window.location.pathname.replace(/[^0-9]/gi, ''));
    await page.goto(`https://www.aldimobile.com.au/admin/s/${account}/recharge/plan/${path}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#recharge_plan_confirm_submit', {
      visible: true
    });
    // await page.click('#recharge_plan_confirm_submit');
  } catch (err) {
    console.error(`💥 There was an issue completing a balance check: ${err}\n\nTrying again...`);
  }
};

const getMinimumValue = async () => {
  const {
    models: { serviceSettings }
  } = database;

  // Get Settings from Database
  const minimumValue = await serviceSettings
    .findOne({ where: { id: 1 }, attributes: ['minimumValue'] })
    .then(({ dataValues }) => dataValues)
    .catch(err => console.error(`💥 There was an issue retrieving the minimumValue: ${err}`));

  return minimumValue;
};

const getPickedOption = async () => {
  const {
    models: { serviceSettings, rechargeValues }
  } = database;

  // Get Recharge Value from Database
  const { rechargeValue } = await serviceSettings
    .findOne({ where: { id: 1 }, attributes: ['rechargeValue'] })
    .then(({ dataValues }) => dataValues)
    .catch(err => console.error(`💥 There was an issue retrieving the rechargeValue: ${err}`));

  // Get Picked Option from Database
  const { path } = await rechargeValues
    .findOne({ where: { id: rechargeValue + 1 } })
    .then(({ dataValues }) => dataValues)
    .catch(err => console.error(`💥 There was an issue retrieving the picked option: ${err}`));

  return path;
};

export { compareBalance, checkBalance, triggerRecharge };
