const express = require('express')
const router = express.Router()
const {auth} = require('../middleware/auth')
const { add, all } = require('../controllers/employees')

// /api/employees
router.get('/', auth, all)
// /api/employees/id
router.get('/:id', auth, () => console.log('get employee'))
// /api/employees/add
router.post('/add', auth, add)
// /api/employees/remove
router.post('/remove/:id', auth, () => console.log('delete employee'))
// /api/employees/edit
router.put('/edit/:id', auth, () => console.log('edit employee'))

module.exports = router

