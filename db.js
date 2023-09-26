const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_sb29', // Database name
  'clouduser', // User
  'Uo85L7ID3jS1MBZulGCwBlDnCJ0qeJtp', // Password
  {
    host: '@dpg-ck9d0r1ehpqs73c3nj8g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
