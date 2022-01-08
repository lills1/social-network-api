const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
// /api/courses/:courseId

// http://localhost:3001/api/thoughts/:id/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)

// http://localhost:3001/api/thoughts/:id/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
