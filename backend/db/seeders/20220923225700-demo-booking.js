'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'apitest';  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName='Bookings';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: new Date("2022-11-19"),
        endDate: new Date("2022-11-20")
      },
      {
        spotId: 1,
        userId: 2,
        startDate: new Date("2022-12-19"),
        endDate: new Date("2022-12-20")
      },
      {
        spotId: 1,
        userId: 3,
        startDate: new Date("2022-11-23"),
        endDate: new Date("2022-11-25")
      },
      {
        spotId: 2,
        userId: 1,
        startDate: new Date("2023-01-19"),
        endDate: new Date("2023-01-22")
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date("2022-12-09"),
        endDate: new Date("2022-12-11")
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date("2022-12-25"),
        endDate: new Date("2022-12-29")
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date("2022-12-09"),
        endDate: new Date("2022-12-11")
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName='Bookings';
    const Op = Sequelize.Op;
     await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
     }, {});
  }
};
