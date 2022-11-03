const planning = require('../Model/planning');
const experts = require('../Model/Experts');
const wedo = require('../Model/whatwedo');
const banner = require('../Model/banner');

function getHome(req, res) {
    const plan = planning.planning
    const allExperts = experts.experts;
    const work = wedo.whatwedo;
    const banners = banner.banner;

    res.render('home', {
        title: "Home",
        plans: plan,
        experts: allExperts,
        work: work,
        banners: banners,
        size: banners.length
    });
}

function getAbout(req, res) {
    res.render('about', { 
        title: "About" 
    });
}

function getContact(req, res) {
    res.render('contact', { 
        title: "Contact us" 
    });
}

function getWedo(req, res) {
    const work = wedo.whatwedo;
    res.render('we-do', { 
        title: "What we do",
        work: work
    });
}

function getPricing(req, res) {
    const plan = planning.planning
    res.render('pricing', {
        title: "Planning", plans: plan
    });
}

function appiontment(req, res) {
    res.render('appointment', {
        title: "Appointment"
    });
}

async function addExpert(req, res) {
    try {

        const expert = new experts({
            id: 3,
            image: req.body.image,
            name: req.body.name,
            bio: req.body.bio
        });

        await experts.save();

        return res.status(201).json({
            message: "Expert added successfully",
            test: "Done"
        })

    }catch(err) {
        return res.status(500).json({
            message: err
        })
    }
}


module.exports = {
    getHome,
    getAbout,
    getContact,
    getWedo,
    getPricing,
    appiontment,
    addExpert
}