import app from '../../app'

app.controller('newController', ng(function ($state, db) {
  var PDFTestData = {
    "petitionerFName": "Jane",
    "petitionerMName": "M",
    "petitionerLName": "Doe",
    "petitionerAddressStreet": "300 N 275 W",
    "petitionerAddressCityStateZip": "Provo, UT, 84101",
    "petitionerPhone": "801-359-8462",
    "petitionerDOB": "07/19/87",
    "petitionerOtherProtectedPeopleName1": "John",
    "petitionerOtherProtectedPeopleAge1": "7",
    "petitionerOtherProtectedPeopleRelationship1":"Son",
    "petitionerOtherProtectedPeopleName2":"",
    "petitionerOtherProtectedPeopleAge2":"",
    "petitionerOtherProtectedPeopleRelationship2":"",
    "petitionerOtherProtectedPeopleName3":"",
    "petitionerOtherProtectedPeopleAge3":"",
    "petitionerOtherProtectedPeopleRelationship3":"",
    "petitionerOtherProtectedPeopleName4":"",
    "petitionerOtherProtectedPeopleAge4":"",
    "petitionerOtherProtectedPeopleRelationship4":"",
    "petitionerOtherProtectedPeopleName5":"",
    "petitionerOtherProtectedPeopleAge5":"",
    "petitionerOtherProtectedPeopleRelationship5":"",
    "petitionerAttornyNameAndNumber":"",
    "petitionerMarriedOrEmancipatedYesBox":"X",
    "petitionerMarriedOrEmancipatedNoBox":"",
    "respondentFName":"Jeff",
    "respondentMName":"",
    "respondentLName":"Doe",
    "respondentOtherNames1":"Jeffery",
    "respondentOtherNames2":"",
    "respondentRelationshipTopetitioner":"Ex-spouse",
    "respondentAddressStreet":"300 N 274 W",
    "respondentAddressCityStateZip": " Provo, UT, 84101",
    "respondentEmployerNameAndAddress": "N/A",
    "respondentSex":"M",
    "respondentRace":"White",
    "respondentDOB":"09/27/82",
    "respondentHeight":"5'11\"",
    "respondentWeight":"210 lbs",
    "respondentEyes":"brown",
    "respondentHair":"bald",
    "respondentSSNLastFour":"8495",
    "respondentDistinguishingFeatures1":"Scar above left eyebrow",
    "respondentDistinguishingFeatures2":"Face tattoo of a shark",
    "respondentDriversLicenseState":"UT",
    "respondentDriversLicenseExpires":"04/17",
    "respondentOtherLocationName1":"Bar",
    "respondentOtherLocationType1":"Social",
    "respondentOtherLocationTimes1":"Anytime after 6pm",
    "respondentOtherLocationPhone1":"801-539-4815",
    "respondentOtherLocationName2":"",
    "respondentOtherLocationType2":"",
    "respondentOtherLocationTimes2":"",
    "respondentOtherLocationPhone2":"",
    "respondentOtherLocationName3":"",
    "respondentOtherLocationType3":"",
    "respondentOtherLocationTimes3":"",
    "respondentOtherLocationPhone3":"",
    "respondentVehicleMake1":"Honda",
    "respondentVehicleModel1":"Civic",
    "respondentVehicleColor1":"yellow",
    "respondentVehiclePlates1":"1G5 3E4",
    "respondentVehicleMake2":"",
    "respondentVehicleModel2":"",
    "respondentVehicleColor2":"",
    "respondentVehiclePlates2":""
};

  this.beginManualEntry = () => {
    db.createCase(PDFTestData).then((data) => {
      let {id} = data
      $state.go('nav.case.application.myInfo', {id})
    })
  }

  this.beginWithFacebook = () => {
    alert("Sorry, this feature didn't make it...")
  }

}))
