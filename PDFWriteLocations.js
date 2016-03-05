var hummus = require('hummus');

var PDFValueMerge = function(obj1, obj2)
{
    for(var p in obj1)
    {
        obj1[p][value] = obj2[p];
    }
};

router.get('/api/pendingForms', function(req, res, next) {
    //WritePDF(PDFWriteLocations, req.values, '/FORMS/01_Request_For_Protective_Order.pdf', 0);

    PDFValueMerge(req.)

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
/*
    var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://swiftshieldcourthack%40gmail.com:TeamAglet@smtp.gmail.com');

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Swift Shield" <swiftshieldcourthack@gmail.com>', // sender address
        to: 'mark.ryan@live.ca', // list of receivers
        subject: 'Rapid Restraining Order Request', // Subject line
        text: 'Please review and file the attached forms.', // plaintext body
        attachments:[
            {
                filename:"Restraining Order Request Form",
                content:
            }
        ]
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});
*/
var PDFWriteLocations = {
    petitionerFName: {x: 40, y: 570, page: 0},
    petitionerMName: {x: 137, y: 570, page: 0},
    petitionerLName: {x: 222, y: 570, page: 0},
    petitionerAddressStreet: {x: 40, y: 512, page: 0},
    petitionerAddressCityStateZip: {x: 40, y: 482, page: 0},
    petitionerPhone: {x: 98, y: 452, page: 0},
    petitionerDOB: {x: 180, y: 434, page: 0},
    petitionerOtherProtectedPeopleName1: {x: 300, y: 489, page: 0},
    petitionerOtherProtectedPeopleAge1: {x: 445, y: 489, page: 0},
    petitionerOtherProtectedPeopleRelationship1: {x: 486, y: 489, page: 0},
    petitionerOtherProtectedPeopleName2: {x: 300, y: 473, page: 0},
    petitionerOtherProtectedPeopleAge2: {x: 445, y: 473, page: 0},
    petitionerOtherProtectedPeopleRelationship2: {x: 486, y: 473, page: 0},
    petitionerOtherProtectedPeopleName3: {x: 300, y: 460, page: 0},
    petitionerOtherProtectedPeopleAge3: {x: 445, y: 460, page: 0},
    petitionerOtherProtectedPeopleRelationship3: {x: 486, y: 460, page: 0},
    petitionerOtherProtectedPeopleName4: {x: 300, y: 447, page: 0},
    petitionerOtherProtectedPeopleAge4: {x: 445, y: 447, page: 0},
    petitionerOtherProtectedPeopleRelationship4: {x: 486, y: 447, page: 0},
    petitionerOtherProtectedPeopleName5: {x: 300, y: 434, page: 0},
    petitionerOtherProtectedPeopleAge5: {x: 445, y: 434, page: 0},
    petitionerOtherProtectedPeopleRelationship5: {x: 486, y: 434, page: 0},
    petitionerAttornyNameAndNumber: {x: 315, y: 414, page: 0},
    petitionerMarriedOrEmancipatedYesBox: {x: 468, y: 401, page: 0},
    petitionerMarriedOrEmancipatedNoBox: {x: 513, y: 401, page: 0},
    respondentFName: {x: 40, y: 364, page: 0},
    respondentMName: {x: 140, y: 364, page: 0},
    respondentLName: {x: 225, y: 364, page: 0},
    respondentOtherNames1: {x: 130, y: 340, page: 0},
    respondentOtherNames2: {x: 40, y: 326, page: 0},
    respondentRelationshipToPetitioner: {x: 170, y: 310, page: 0},
    respondentAddressStreet: {x: 117, y: 296, page: 0},
    respondentAddressCityStateZip: {x: 40, y: 282, page: 0},
    respondentEmployerNameAndAddress: {x: 40, y: 243, page: 0},
    respondentSex: {x: 310, y: 353, page: 0},
    respondentRace: {x: 369, y: 353, page: 0},
    respondentDOB: {x: 432, y: 353, page: 0},
    respondentHeight: {x: 489, y: 353, page: 0},
    respondentWeight: {x: 540, y: 353, page: 0},
    respondentEyes: {x: 312, y: 320, page: 0},
    respondentHair: {x: 370, y: 320, page: 0},
    respondentSSNLastFour: {x: 468, y: 320, page: 0},
    respondentDistinguishingFeatures1: {x: 300, y: 297, page: 0},
    respondentDistinguishingFeatures2: {x: 300, y: 282, page: 0},
    respondentDriversLicenseState: {x: 445, y: 273, page: 0},
    respondentDriversLicenseExpires: {x: 522, y: 273, page: 0},
    respondentOtherLocationName1: {x: 40, y: 178, page: 0},
    respondentOtherLocationType1: {x: 252, y: 178, page: 0},
    respondentOtherLocationTimes1: {x: 382, y: 178, page: 0},
    respondentOtherLocationPhone1: {x: 500, y: 178, page: 0},
    respondentOtherLocationName2: {x: 40, y: 163, page: 0},
    respondentOtherLocationType2: {x: 252, y: 163, page: 0},
    respondentOtherLocationTimes2: {x: 382, y: 163, page: 0},
    respondentOtherLocationPhone2: {x: 500, y: 163, page: 0},
    respondentOtherLocationName3: {x: 40, y: 150, page: 0},
    respondentOtherLocationType3: {x: 252, y: 150, page: 0},
    respondentOtherLocationTimes3: {x: 382, y: 150, page: 0},
    respondentOtherLocationPhone3: {x: 500, y: 150, page: 0},
    respondentVehicleMake1: {x: 40, y: 92, page: 0},
    respondentVehicleModel1: {x: 173, y: 92, page: 0},
    respondentVehicleColor1: {x: 310, y: 92, page: 0},
    respondentVehiclePlates1: {x: 448, y: 92, page: 0},
    respondentVehicleMake2: {x: 40, y: 78, page: 0},
    respondentVehicleModel2: {x: 173, y: 78, page: 0},
    respondentVehicleColor2: {x: 310, y: 78, page: 0},
    respondentVehiclePlates2: {x: 448, y: 78, page: 0}

};