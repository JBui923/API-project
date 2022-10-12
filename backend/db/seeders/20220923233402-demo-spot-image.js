'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'apitest';  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName='SpotImages';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'test.png',
        preview: false
      },
      {
        spotId: 2,
        url: 'test1.png',
        preview: false
      },
      {
        spotId: 2,
        url: 'PrevFor2.png',
        preview: true
      },
      {
        spotId: 3,
        url: 'PrevFor3.png',
        preview: true
      },
      {
        spotId: 4,
        url: 'PrevFor4.png',
        preview: true
      },
      {
        spotId: 5,
        url: 'PrevFor5.png',
        preview: true
      },
      {
        spotId: 1,
        url: 'PrevFor1.png',
        preview: true
      },
      {
        spotId: 1,
        url: 'test6.png',
        preview: false
      },
      {
        spotId: 6,
        url: 'PrevFor6.png',
        preview: true
      },
      {
        spotId: 7,
        url: 'PrevFor7.png',
        preview: true
      },
      {
        spotId: 8,
        url: 'test9.png',
        preview: false
      },
      {
        spotId: 8,
        url: 'PrevFor8.png',
        preview: true
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName='SpotImages';
    const Op = Sequelize.Op;
     await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5] }
     }, {});
  }
};
