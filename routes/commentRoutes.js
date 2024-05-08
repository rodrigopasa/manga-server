const express = require("express");
const router = express.Router();
const { createComment, getCommentsByChapter, deleteComment } = require("../controllers/commentController");
const authMiddleware = require('../middlewares/auth');
const { validateMangaId, validateChapterId, validateUserId, validateCommentId } = require('../middlewares/validateInput');
const corsMiddleware = require("../middlewares/createCorsMiddleware");

// Add CORS middleware to all routes
router.use(corsMiddleware);

router.post("/", authMiddleware, validateUserId, validateMangaId, validateChapterId, createComment);
router.get("/:mangaId/:chapterId", authMiddleware, validateMangaId, validateChapterId, getCommentsByChapter);
router.delete('/:commentId', authMiddleware, validateUserId, validateCommentId, deleteComment);

module.exports = router;
