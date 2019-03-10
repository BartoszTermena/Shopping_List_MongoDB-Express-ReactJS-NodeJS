const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Item = require('../../models/Item');

//GET api/items
//@access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => {
        res.json(items);
    })
    .catch(err => {
        res.status(404).json({message: err});
    });
});
//POST api/items
//@access Public
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(404).json({message: err});
    });
});
//DELETE api/items/:id
//@access Public
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => {
        item.remove().then(() => {
            res.json({message: 'item removed'});
        });
    })
    .catch(err => {
        res.status(404).json({message: err});
    });
});


module.exports = router;