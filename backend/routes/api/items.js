const express = require('express');
const asyncHandler = require('express-async-handler');
const { Items } = require('../../db/models');
const router = require('./session');

router.get('/:userId',
asyncHandler(async function (req, res) {
    console.log("REQ PARAMS", req.params)
    const items = await Items.findAll({
        where: {
            user_id: Number(req.params.userId)
        }
    });
    console.log("FROM API ROUTE", items)
    return res.json({items});
  })
)

router.patch(
    '/:id',
    asyncHandler(async function (req, res) {
        const item = await Items.findByPk(req.params.id);
        item.body = req.body.item;
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