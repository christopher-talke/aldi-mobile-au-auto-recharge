import express from 'express';
import cookieParser from 'cookie-parser';

import { logger } from './require';
import { databaseInit } from './database';

import indexRouter from './routes/index';
import authRouter from './routes/auth';

// Express
const app = express();

// Plugins
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/auth', authRouter);

// Test Database
databaseInit();

module.exports = app;
