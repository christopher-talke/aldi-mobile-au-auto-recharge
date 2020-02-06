import { database } from '../database';

const log = async value => {
  const {
    models: { logs }
  } = database;

  // Get Settings from Database
  await logs.create({ value }).catch(err => console.error(`💥 There was an issue logging this action`));
};

export default log;
