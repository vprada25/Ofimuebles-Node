const { Router } = require('express');
const router = Router();





router.get('/', (req, res) => {
    res.render('../views/index.hbs')
})

router.get('/about', (req, res) => {
    res.render('../views/layouts/about-us/about.hbs')
})

router.get('/login', (req, res) => {
    res.render('../views/layouts/login/login.hbs')
})

router.get('/register', (req, res) => {
    res.render('../views/layouts/register/register.hbs')
})

router.get('/admin', (req, res) => {
    res.render('../views/layouts/admin/admin.hbs')
})










module.exports = router;