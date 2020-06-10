const express = require('express');
const router = express.Router();
const { getCompany, addCompany, editCompany, deleteCompany, addUser, authenticateUser, authenticateToken } = require('../controllers/controllers');

router
    .route('/home')
    .get(authenticateToken, getCompany)
    .post(authenticateToken, addCompany)

router
    .route('/:id')
    .put(authenticateToken, editCompany)
    .delete(authenticateToken, deleteCompany)

router
    .route('/signup')
    .post(addUser)
    
router
    .route('/login')
    .post(authenticateUser)



module.exports = router;