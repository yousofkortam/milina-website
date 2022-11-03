const router = require('express').Router();
const Home = require('../Controller/Home.Crtl');


router.get('/', Home.getHome);

router.get('/about', Home.getAbout);

router.get('/contact', Home.getContact);

router.get('/we-do', Home.getWedo);

router.get('/pricing', Home.getPricing);

router.get('/appointment', Home.appiontment);

router.get('/add-expert', Home.addExpert);

module.exports = router;