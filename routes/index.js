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

module.exports = router;
