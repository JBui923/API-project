'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = 'apitest';  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName='Reviews';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: '5 stars, will come back',
        stars: 5
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Old, run down. Avoid this place.',
        stars: 0
      },
      {
        spotId: 3,
        userId: 4,
        review: 'Nice location, but no amenities',
        stars: 4
      },
      {
        spotId: 4,
        userId: 2,
        review: 'Nothing special',
        stars: 3
      },
      {
        spotId: 5,
        userId: 1,
        review: 'Not bad, but could be better',
        stars: 4
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Worse time of my life',
        stars: 2
      },
      {
        spotId: 1,
        userId: 4,
        review: 'It was just ok',
        stars: 3
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName='Reviews';
    const Op = Sequelize.Op;
     await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5] }
     }, {});
  }
};
