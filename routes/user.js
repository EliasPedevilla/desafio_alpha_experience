const express = require('express')
const { getAllUsers, getSingleUser, updateSingleUser, deleteSingleUser } = require('../controllers/users');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.get('/', isAuth, isAdmin, getAllUsers);
router.get('/:userId', isAuth, getSingleUser);
router.put('/:userId', isAuth, isAdmin, updateSingleUser);
router.delete('/:userId', isAuth,isAdmin, deleteSingleUser);

module.exports = router