const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { getCompany, addCompany, editCompany, deleteCompany, addUser, authenticateUser } = require('../controllers/controllers');

router
    .route('/home')
    .post(authenticateToken, getCompany)

router
    .route('/home/add')
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
