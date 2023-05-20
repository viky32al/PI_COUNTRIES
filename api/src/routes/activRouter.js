const express = require('express');
const router = express.Router();
const { postActivity,getAllActivities, deleteActivity, updateActivity} = require('../controlers/activity')

router.post('/', postActivity);

router.get('/', getAllActivities);

router.delete('/activities/:id', deleteActivity);

router.put('/activities/:id', updateActivity);

module.exports = router;