const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend

} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/students/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// // http://localhost:3001/api/users/:id/friends/:friendId
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
