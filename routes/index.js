var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function(req, res){
    console.log('getgot');
    res.json('{ req: req.user }')
});

router.get('/login/facebook',
    passport.authenticate('facebook', { scope: ['public_profile', 'email',
        'user_about_me', 'user_birthday', 'user_location', 'user_photos'
    ]})
);

router.get('/login/google/return',
    passport.authenticate('google', { failureRedirect: '/api/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        res.render('profile', {user: req.user});
    }
);

router.post('/application', function(req, res, next) {
    req.body.resume = Math.floor(100000000 + Math.random() * 900000000).toString(16);
    req.body.status = 'pending';
    console.log('random re-entry string: ' + req.body.resume);
    collection.insert(req.body, {w:1}, function(err, result) {console.log('document inserted with ' + err)});

    res.json(req.body);
});

//router.get('/api/application/:', fuction)
//GET  /api/application/{ID} - returns document
//GET  /api/application/{ID}/formName.pdf - downloard PDF of

module.exports = router;
