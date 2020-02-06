import Sequelize from 'sequelize';
import Models from './models';
import seedData from './seed';

const ENVIRONMENT = process.env.NODE_ENV === 'dev';
const DATABASE = ENVIRONMENT ? 'amaur_dev' : 'amaur_prod';
const HOST = ENVIRONMENT ? 'localhost' : process.env.DB_HOST;
const USERNAME = ENVIRONMENT ? 'postgres_dev' : process.env.DB_USERNAME;
const PASSWORD = ENVIRONMENT ? 'postgres_dev' : process.env.DB_PASSWORD;

// Database Connection
const database = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  logging: false,
  sync: true
});

// Initiate connection to database and sync models
const databaseInit = async () => {
  await database
    .authenticate()
    .then(() => {
      console.log('✔ Connection to database has been established successfully.');
    })
    .catch(err => {
      console.error('💥 Unable to connect to the database:', err);
    });

  try {
    for (var model in Models) {
      await database.define(model, Models[model]).sync({ force: true });
    }
  } catch (err) {
    console.error('💥 Unable to sync database models:', err);
  }

  await seedData(ENVIRONMENT);
};

export { database, databaseInit };
