const express = require('express');
const asyncHandler = require('express-async-handler');
const { Borrow, Items, User } = require('../../db/models');

const router = express.Router();

// // my lent items
// router.get('/:userId',
// asyncHandler(async function (req, res) {
//     const lentItems = await Borrow.findAll({
//         where: {
//             owner_id: Number(req.params.userid)
//         }
//     });
//     return res.json({lentItems})
//     })
// )


router.get('/:userId',
asyncHandler(async function (req, res) {
    const borrowedItems = await Borrow.findAll({
        where: {
            owner_id: Number(req.params.userId)
        },
        include: [{
            model: Items
        },
    {
        model: User,
        as: 'Owner'
    }, {
        model: User,
        as: 'Borrower'
    }
]
    });
    return res.json({borrowedItems})
    })
)

router.post(
    '/',
    asyncHandler(async function(req, res) {
        const lend = await Borrow.create({
            lent: req.body.lent,
            returned: req.body.returned,
            item_id: req.body.itemId,
            borrower_id: req.body.borrowerId,
            owner_id: req.body.ownerId


        })
        return res.json({lend})
    })
    )


module.exports = router;