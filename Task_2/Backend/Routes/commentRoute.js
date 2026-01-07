const express = require('express')
const commentRt = express.Router()

commentRt.get()

module.exports = {commentRt}

// const {
//   addComment,
//   getComments
// } = require("../controllers/commentController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// router.post(
//   "/:postId/comments",
//   authMiddleware,
//   addComment
// );

// router.get(
//   "/:postId/comments",
//   getComments
// );

// module.exports = router;
