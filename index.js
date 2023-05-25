'use strict';

require('dotenv').config();
const app = require('./api-server/src/server');
const { db } = require('./api-server/src/models/index');

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
