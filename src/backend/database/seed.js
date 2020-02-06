import { database } from './index';
import dashboard from '../temp';

const seedData = async dev => {
  const {
    models: { serviceSettings, rechargeValues, notificationSettings }
  } = database;

  dev &&
    (await serviceSettings.create({
      number: dashboard.serviceSettings.number,
      password: 'test123',
      minimumValue: dashboard.serviceSettings.minimumValue,
      rechargeValue: 0,
      setupComplete: dashboard.serviceSettings.setupComplete
    }));

  dev &&
    [...dashboard.notificationSettings.emailAddresses, ...dashboard.notificationSettings.mobileNumbers].forEach(async contact => await notificationSettings.create(contact));

  await dashboard.serviceSettings.rechargeValue.options.forEach(option => rechargeValues.create(option));

  return;
};

export default seedData;
