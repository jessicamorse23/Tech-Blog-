const router = require('express').Router();
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;