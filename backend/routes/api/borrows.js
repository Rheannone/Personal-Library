const express = require('express');
const asyncHandler = require('express-async-handler');
const { Borrow } = require('../../db/models');

const router = express.Router();

// my lent items
router.get('/:userId',
asyncHandler(async function (req, res) {
    const lentItems = await Borrow.findAll({
        where: {
            owner_id: Number(req.params.userid)
        }
    });
    return res.json({lentItems})
    })
)

// my borrowed items
router.get('/:userId',
asyncHandler(async function (req, res) {
    const borrowedItems = await Borrow.findAll({
        where: {
            borrower_id: Number(req.params.userid)
        }
    });
    return res.json({borrowedItems})
    })
)


module.exports = router;