import { database } from '../database';

const log = async value => {
  const {
    models: { logs }
  } = database;
  await logs.create({ value }).catch(err => console.error(`💥 There was an issue logging this action: ${err}`));
  return;
};

export default log;
