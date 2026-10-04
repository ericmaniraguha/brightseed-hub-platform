const express = require('express');
const router = express.Router();
const { getCareers, createCareer, deleteCareer } = require('../controllers/careerController');

router.get('/', getCareers);
router.post('/', createCareer);
router.delete('/:id', deleteCareer);

module.exports = router;
