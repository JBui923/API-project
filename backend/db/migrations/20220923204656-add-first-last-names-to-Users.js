'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'apitest';  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'firstName', {
      type: Sequelize.STRING(30),
      allowNull: false,
    })
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING(30),
      allowNull: false,
    }, options)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName', options)
    await queryInterface.removeColumn('Users', 'lastName', options)
  }
};
