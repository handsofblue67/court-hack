var express = require('express');
var router = express.Router();
var passport = require('passport');
var MongoClient = require('mongodb').MongoClient;
var config = require('../config.json');
var hummus = require('hummus');

router.param('id', function(req, res, next, id) {
    req.id = id;
    next();
});

router.get('/login', function(req, res){
    console.log('getgot');
    res.json('{ req: req.user }')
});

router.get('/login/facebook',
    passport.authenticate('facebook', { scope: ['public_profile', 'email',
        'user_about_me', 'user_birthday', 'user_location', 'user_photos'
    ]})
);

router.get('/login/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/api/login' }),
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
    var doc = req.body;
    doc.id = Math.floor(100000000 + Math.random() * 900000000).toString(16);
    doc.status = 'pending';
    console.log('random re-entry string: ' + req.body);

    var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('');
    MongoClient.connect(mongoPath, function (err, db) {

        if (err) { return console.dir(err); }

        var collection = db.collection('requests');

        collection.insert(req.body, {w: 1}, function (err, result) {
            console.log('document inserted with ' + result)
        });

        console.log(req.body);
        res.json(req.body);
    });
});

router.get('/application/:id', function(req, res) {

    var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('');

    var retrieve = req.id;

    MongoClient.connect(mongoPath, function(err, db) {

        if(err) { return console.dir(err); }

        var collection = db.collection('requests');
        collection.findOne({id:retrieve}, function(err, item) {
            console.log('retrieved from db: ' + err || item);
            res.json(err || item);
        });
    });
});

router.get('/application/:id/formName.pdf', function(req, res) {
    var PDFWriteLocations = require('PDFWriteLocations');

    var PDFValueMerge = function(obj1, obj2)
    {
        for(var p in obj1)
        {
            obj1[p][value] = obj2[p];
        }
    };

    var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('');

    var retrieve = req.id;

    MongoClient.connect(mongoPath, function(err, db) {

        if(err) { return console.dir(err); }

        var collection = db.collection('requests');
        collection.findOne({ id:retrieve }, function(err, item) {
            if (err) { return console.dir(err); }
            PDFValueMerge(PDFWriteLocations, item);

            //WritePDF(PDFWriteLocations, req.values, '/FORMS/01_Request_For_Protective_Order.pdf', 0);

            res.writeHead(200, {'Content-Type': 'application/pdf'});

            var pdfWriter = hummus.createWriterToModify(
                new hummus.PDFRStreamForFile('/FORMS/01_Request_For_Protective_Order.pdf'),
                new hummus.PDFStreamForResponse(res));
            /** use pdfwriter to write pdf content **/
            var pageModifier = new hummus.PDFPageModifier(pdfWriter, formPage);
            var pageModifierContext = pageModifier.startContext().getContext();

            for (var p in valueMapping) {
                pageModifierContext.writeText(
                    valueMapping[p].value,
                    valueMapping[p].x, valueMapping[p].y,
                    {font: pdfWriter.getFontForFile('./fonts/arial.ttf'), size: 8, colorspace: 'gray', color: 0x00}
                );
            }

            pageModifier.endContext().writePage();
            pdfWriter.end();


            res.end();
        });
    });
});
//GET  /api/application/{ID}/formName.pdf - downloard PDF of

module.exports = router;

