import { database } from '../database';

const getCredentials = async () => {
  const {
    models: { serviceSettings }
  } = database;

  // Get Settings from Database
  const creds = await serviceSettings
    .findOne({ where: { id: 1 }, attributes: ['number', 'password'] })
    .then(({ dataValues }) => dataValues)
    .catch(err => console.error(`💥 There was an issue retrieving serviceSettings: ${err}`));

  return creds;
};

export default getCredentials;
