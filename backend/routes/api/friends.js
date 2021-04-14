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

    const friend = await Friend.create({
        user_id: req.body.userId,
        friend_id: req.body.friendId,
        friend_username: "Rhea"
        })
        return res.json({friend});
}))


// router.get (
//     '/:email',
//     asyncHandler(async function (req, res) {
//       const users = await User.findAll({
//         where: {
//           email: req.params.email
//         }
//       });
//       return res.json({users})
//     })
//   )
  


module.exports = router