const express = require('express');
const asyncHandler = require('express-async-handler');
const { Items } = require('../../db/models');
// const router = require('./session');

const router = express.Router();


router.post(
    '/',
    asyncHandler(async function(req, res) {
        const item = await Items.create({
            user_id: req.body.userId,
            title: req.body.item
        });
        return res.json({item})
    })
)

router.get('/:userId',
asyncHandler(async function (req, res) {
    const items = await Items.findAll({
        where: {
            user_id: Number(req.params.userId)
        }
    });
    return res.json({items});
  })
)

router.patch(
    '/:id',
    asyncHandler(async function (req, res) {
        const item = await Items.findByPk(req.params.id);
        item.title = req.body.item;
        await item.save();
        return res.json({item});
    })
);

router.delete(
    '/:id',
    asyncHandler(async function (req, res) {
        const item = await Items.findByPk(req.params.id);
        await item.destroy();
        return res.json({ message : "item added! "})
    })
)

module.exports = router