import Sequelize from 'sequelize';
import Models from './models';

// Database Connection
const database = new Sequelize('postgres_dev', 'postgres_dev', 'postgres_dev', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  sync: process.env.NODE_ENV === 'dev'
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
      database.define(model, Models[model]).sync();
    }
  } catch (err) {
    console.error('💥 Unable to sync database models:', err);
  }
};

export { database, databaseInit };
