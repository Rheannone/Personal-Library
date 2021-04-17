const express = require('express');
const asyncHandler = require('express-async-handler');
// const { searchUsers } = require('../../../frontend/src/store/friends');
const { Friend } = require('../../db/models');
const { User } = require('../../db/models');

const router = express.Router();


router.get('/:userId',
asyncHandler(async function (req, res) {
    const friends = await Friend.findAll({
        where: {
            user_id: Number(req.params.userId)
        }
    });
    return res.json({friends});
  })
);


// add a friend
router.post('/',
asyncHandler(async function (req, res) {

    const friendRecord = await User.findAll({
        where: {
            id: req.body.friendId
        }
    })

    const friendUsername = friendRecord[0].dataValues.username 

    const friend = await Friend.create({
        user_id: req.body.userId,
        friend_id: req.body.friendId,
        friend_username: friendUsername
        })
        return res.json({friend});
}))


//delete a friend
router.delete(
    '/:id',
    asyncHandler(async function (req, res) {
        const friend = await Friend.findByPk(req.params.id);
        await friend.destroy();
        return res.json({ message : "friend deleted"})
    })
)



module.exports = router