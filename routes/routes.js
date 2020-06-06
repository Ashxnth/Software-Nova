const express = require('express');
const router = express.Router();
const { getCompany, addCompany, editCompany, deleteCompany } = require('../controllers/controllers');

router
    .route('/')
    .get(getCompany)
    .post(addCompany)

router
    .route('/:id')
    .put(editCompany)
    .delete(deleteCompany)

module.exports = router;