const path = require('path');
const dbConfig = require('./src/config/database');
// Build the connection URL string
const connectionUrl = 'mysql://' +
dbConfig.user + ':' + dbConfig.password + '@' +
dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.database;
// Export settings for the Sequelize command line tool
module.exports = {
'url': connectionUrl,
'migrations-path': path.resolve('src', 'migrations'),
'models-path': path.resolve('src', 'models'),
'seeders-path': path.resolve('src', 'seeders')
};