import app from '../../app';

app.controller('respondentInfoController',ng(function(){

  this.respondentInfo = {};

  this.respondentInfoFields = [
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key:'respondentFName',
          type:'input',
          templateOptions: {
            label: 'Respondent\'s First Name',
            placeholder: "First Name"
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: 'respondentLName',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Respondent\'s Last Name',
            placeholder: 'Last Name'
          },
          elementAttributes: {
            flex: '1'
          }
        }
      ]
    },
    {

      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key: 'respondentOtherNames1',
          type: 'input',
          templateOptions: {
            label: 'Respondent\'s Nick Name',
            placeholder: 'Nick Name 1'
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: 'respondentOtherNames2',
          type: 'input',
          templateOptions: {
            label: 'Other Nick Name',
            placeholder: 'Nick Name 2'
          },
          elementAttributes: {
            flex: '1'
          }
        }
      ]
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key:'respondentRelationshipToPetitioner',
          type: 'select',
          templateOptions : {
            label: 'Relationship To You',
            elementAttributes: {
              flex : '1'
            },
            options: [
              {
                name: "We are married now",
                value: 'nowMarried'
              },
              {
                name: 'We used to be married',
                value: 'usedToBeMarried'
              },
              {
                name: 'We live together as a couple',
                value: 'nowCouple'
              },
              {
                name: 'We live or used to live in the same home',
                value: 'useToLiveInSameHome'
              },
              {
                name: 'We are relatives, in-laws, or related by adoption',
                value: 'byAdoption'
              },
              {
                name: 'We are expecting a child now. ',
                value: 'expectingChild'
              },
              {
                name: 'We have or had a child or children together.',
                value: 'haveChild'
              }
            ]
          }
        }

      ]
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {}


      ]
    }
  ];
}));
/*
 { name:respondentFName, x:40, y:364, page:0}, DONE
 { name:respondentMName, x:140, y:364, page:0},
 { name:respondentLName, x:225, y:364, page:0}, DONE
 { name:respondentOtherNames1, x:130, y:340, page:0}, DONE
 { name:respondentOtherNames2, x:40, y:340, page:0}, DONE
 { name:respondentRelationshipToPetitioner, x:184, y:310, page:0}, DONE
 { name:respondentAddressStreet, x:117, y:300, page:0},
 { name:respondentAddressCityStateZip, x:40, y:285, page:0},
 { name:respondentEmployerNameAndAddress, x:40, y:243, page:0},
 { name:respondentSex, x:310, y:353, page:0},
 { name:respondentRace, x:369, y:353, page:0},
 { name:respondentDOB, x:432, y:353, page:0},
 { name:respondentHeight, x:489, y:353, page:0},
 { name:respondentWeight, x:540, y:353, page:0},
 { name:respondentEyes, x:312, y:320, page:0},
 { name:respondentHair, x:370, y:320, page:0},
 { name:respondentSSNLastFour, x:468, y:320, page:0},
 { name:respondentDistinguishingFeatures1, x:300, y:297, page:0},
 { name:respondentDistinguishingFeatures2, x:300, y:282, page:0},
 { name:respondentDriversLicenseState, x:445, y:273, page:0},
 { name:respondentDriversLicenseState, x:522, y:273, page:0},
 { name:respondentOtherLocationName1, x:40, y:178, page:0},
 { name:respondentOtherLocationType1, x:252, y:178, page:0},
 { name:respondentOtherLocationTimes1, x:382, y:178, page:0},
 { name:respondentOtherLocationPhone1, x:500, y:178, page:0},
 { name:respondentOtherLocationName2, x:40, y:163, page:0},
 { name:respondentOtherLocationType2, x:252, y:163, page:0},
 { name:respondentOtherLocationTimes2, x:382, y:163, page:0},
 { name:respondentOtherLocationPhone2, x:500, y:163, page:0},
 { name:respondentOtherLocationName3, x:40, y:150, page:0},
 { name:respondentOtherLocationType3, x:252, y:150, page:0},
 { name:respondentOtherLocationTimes3, x:382, y:150, page:0},
 { name:respondentOtherLocationPhone3, x:500, y:150, page:0},
 { name:respondentVehicleMake1, x:40, y:92, page:0},
 { name:respondentVehicleModel1, x:173, y:92, page:0},
 { name:respondentVehicleColor1, x:310, y:92, page:0},
 { name:respondentVehiclePlates1, x:448, y:92, page:0},
 { name:respondentVehicleMake2, x:40, y:78, page:0},
 { name:respondentVehicleModel2, x:173, y:78, page:0},
 { name:respondentVehicleColor2, x:310, y:78, page:0},
 { name:respondentVehiclePlates2, x:448, y:78, page:0}
 */
