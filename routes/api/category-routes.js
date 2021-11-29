const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {

  Category.findAll({
    include: Product
  })
    .then(categoryData => {
      res.json(categoryData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  })
  .then(categoryData => {
    res.json(categoryData)
  })
  .catch(error => {
    res.status(500).json(error)
  })

});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then(categoryData => {
      res.json(categoryData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    res.json(categoryData)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      res.json(categoryData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;