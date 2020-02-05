import { STRING, INTEGER, BOOLEAN } from 'sequelize';

const Models = {
  // Service Settings
  serviceSettings: {
    number: { type: STRING },
    password: { type: STRING },
    minimumValue: { type: INTEGER, defaultValue: 2, nullable: false },
    rechargeValue: { type: INTEGER, defaultValue: 0, nullable: false },
    setupComplete: { type: BOOLEAN, defaultValue: false, nullable: false }
  },
  // Recharge Values
  rechargeValues: {
    friendlyName: { type: STRING },
    path: { type: STRING }
  },
  // Notifications Settings
  notificationSettings: {
    type: { type: INTEGER, nullable: false },
    value: { type: STRING, unique: true }
  },
  // Logs
  logs: {
    value: { type: STRING, nullable: false }
  },
  // Users
  users: {
    username: { type: STRING, unique: true, nullable: false },
    password: { type: STRING, nullable: false },
    active: { type: BOOLEAN, defaultValue: true, nullable: false }
  }
};

export default Models;
