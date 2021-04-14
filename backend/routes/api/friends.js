const express = require('express');
const asyncHandler = require('express-async-handler');
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