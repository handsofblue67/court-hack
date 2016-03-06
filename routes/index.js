var express = require('express');
var router = express.Router();
var passport = require('passport');
var MongoClient = require('mongodb').MongoClient;
var config = require('../config.json');
var hummus = require('hummus');
var _ = require('lodash');
var path = require('path');

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

router.put('/application/:id', function(req, res) {

    var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('');

    var retrieve = req.id;

    MongoClient.connect(mongoPath, function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection('requests');

        delete req.body._id;

        collection.update({id:retrieve}, req.body, {w:1}, function(err, result) {
            console.log('updated form document: ' + result);
            res.json(err || result);
        });
    });
});

router.get('/application/:id/formName.pdf', function(req, res) {
    var PDFWriteLocations = require('./PDFWriteLocations.json');

    var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('');

    var retrieve = req.id;

    MongoClient.connect(mongoPath, function(err, db) {

        if(err) { return console.dir(err); }

        var collection = db.collection('requests');
        collection.findOne({ id:retrieve }, function(err, item) {
            if (err) { return console.dir(err); }
            //WritePDF(PDFWriteLocations, req.values, '/FORMS/01_Request_For_Protective_Order.pdf', 0);

            // SUPER HACK
            var MAP = {
              firstName: "petitionerFName",
              middleName: "petitionerMName",
              lastName: "petitionerLName",
              homeStreetAddr: "petitionerAddressStreet",
              birthdate: "petitionerDOB"
            }

            if (_.has(item, 'myInfo')) {
              var mapped = _.mapKeys(item.myInfo, function (value, key) {
                return MAP[key] || key
              })
              var cityStateZip = _.chain(item)
                .pick('homeCity', 'homeState', 'homeZip')
                .values()
                .join(', ')
                .value()
              mapped['petitionerAddressCityStateZip'] = cityStateZip
              item = _.extend({}, item, mapped)
            }
            // END SUPER HACK



            res.writeHead(200, {'Content-Type': 'application/pdf'});
            var formPath = path.join(__dirname, '../FORMS/01_Request_For_Protective_Order.pdf')

            var pdfWriter = hummus.createWriterToModify(
              new hummus.PDFRStreamForFile(formPath),
              new hummus.PDFStreamForResponse(res)
            )
            /** use pdfwriter to write pdf content **/
            var pageModifier = new hummus.PDFPageModifier(pdfWriter, 0);
            var pageModifierContext = pageModifier.startContext().getContext();

            _.chain(item)
              .map(function(text, key){
                var position = PDFWriteLocations[key]
                return _.extend({}, {text: text}, position)
              })
              .forEach(function(value, key) {
                var text = value.text
                var x = value.x
                var y = value.y
                pageModifierContext.writeText(text, x, y, {
                  font: pdfWriter.getFontForFile('./fonts/arial.ttf'),
                  size: 12,
                  colorspace: 'gray',
                  color: 0x00
                })
              })
              .value()
            // for (var p in item) {
            //   console.log(item[p].value, item[p].x, item[p].y);
            //     pageModifierContext.writeText(
            //         item[p].value,
            //         item[p].x, item[p].y,
            //         {font: pdfWriter.getFontForFile('./fonts/arial.ttf'), size: 8, colorspace: 'gray', color: 0x00}
            //     );
            // }

            pageModifier.endContext().writePage();
            pdfWriter.end();


            res.end();
        });
    });
});
//GET  /api/application/{ID}/formName.pdf - downloard PDF of

module.exports = router;
