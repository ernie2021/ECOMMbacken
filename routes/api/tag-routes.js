const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', (req, res) => {

  Tag.findAll({
    include: Product
  })
    .then(tagData => {
      res.json(tagData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  })
  .then(tagData => {
    res.json(tagData)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(tagData => {
      res.json(tagData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    res.json(tagData)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      res.json(tagData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;