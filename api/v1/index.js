const express = require('express');
const router = express.Router();

const tasksRoutes = require('./routes/tasks');

router.use('/tasks', tasksRoutes);

module.exports = router;
