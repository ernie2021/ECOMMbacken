const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'music1',
  },
  {
    category_name: 'music2',
  },
  {
    category_name: 'music3',
  },
  {
    category_name: 'music4',
  },
  {
    category_name: 'music5',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;