import app from '../../app';
import states from '../myInfo/states';


app.controller('respondentInfoController',ng(function(){

  this.respondentInfo = {};
  this.respondentInfo2 = {};

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
            label: 'Offneder\'s First Name',
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
            label: 'Offender\'s Last Name',
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
            label: 'Offender\'s Nick Name',
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
        },
        {
          key:'respondentSex',
          type: 'select',
          templateOptions: {
            label: 'Sex',
            elementAttributes: {
              flex: '1'
            },
            options: [
              {
                name: 'Male',
                value: 'male'
              },
              {
                name: 'Female',
                value: 'female'
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
        {
          key: 'respondentRace',
          type: 'select',
          templateOptions: {
            label: 'Race',
            elementAttributes: {
              flex: '1'
            },
            options: [
              {
                name: 'Non-Hispanic White',
                value: 'white'
              },
              {
                name: 'Latino',
                value: 'hispanic'
              },
              {
                name: 'Black',
                value: 'black'
              },
              {
                name: 'Asian',
                value: 'asian'
              }
            ]
          }
        },
        {
          key: 'respondentDOB',
          type: 'input',
          templateOptions : {
            reuired: true,
            label: 'Birthdate',
            pattern:  "^\\d{2}-\\d{2}-\\d{4}$",
            placeholder: 'MM-DD-YYYY'
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
          key: 'respondentHeight',
          type: 'input',
          templateOptions: {
            label: 'Height (Inches)',
            pattern:  "^\\d{2}$",
            placeholder: 'ex 70 inches'
          }
        },
        {
          key: 'respondentWeight',
          type: 'input',
          templateOptions: {
            label: 'Weight (lbs)',
            pattern:  "^\\d{3}$",
            placeholder: 'ex 150 lbs'
          }
        },
      ]
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup : [
        {
          key: 'respondentEyes',
          type: 'select',
          templateOptions : {
            label: 'Eye Color',
            elementAttributes : {
              flex : '1'
            },
            options: [
              {
                name : 'Hazel',
                value : 'hzl'
              },
              {
                name: 'Brown',
                value : 'brn'
              },
              {
                name: 'Blue',
                value: 'blu'
              },
              {
                name : 'Green',
                value: 'grn'
              }
            ]
          }
        },
        {
          key: 'respondentHair',
          type: 'select',
          templateOptions : {
            label: 'Hair',
            elementAttributes : {
              flex : '1'
            },
            options: [
              {
                name : 'Bald',
                value : 'bld'
              },
              {
                name: 'Brown',
                value : 'brn'
              },
              {
                name: 'Blonde',
                value: 'blnd'
              },
              {
                name : 'Red',
                value: 'red'
              },
              {
                name : 'Red',
                value: 'red'
              },
              {
                name: 'Gray',
                value: 'gry'
              },
              {
                name: 'Starwberry Blonde',
                value: 'strberry'
              },
              {
                name: 'Black',
                value: 'blk'
              }
            ]
          }
        },
        {
          key: 'respondentSSNLastFour',
          type: 'input',
          templateOptions: {
            label: 'last 4 digits of SSN',
            pattern:  "^\\d{4}$",
            placeholder: 'ex: 5555'
          }
        }
      ]
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup : [
        {
          key: 'respondentDistinguishingFeature1',
          type:'input',
          templateOptions: {
            label: 'Distinguishing Feature (e.g. Tatoos)',
            placeholder: 'scars, etc.'
          }

        },
        {
          key: 'respondentDistinguishingFeature1',
          type:'input',
          templateOptions: {
            label: 'Other Distinguishing Features',
            placeholder: 'more scars, etc.'
          }
        }
      ]
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup : [
        {
          key: 'respondentDriversLicenseState',
          type: 'select',
          templateOptions: {
            label: 'Driver\'s License State',
            options: states
          }
        },
        {
          key: 'respondentVehicleMake',
          type: 'select',
          templateOptions: {

            label: 'Respondent\'s Car Does Not Make',
            options: [
              {
                name: 'Honda',
                value : 'honda'
              },
              {
                name: 'Toyota',
                value : 'toyota'
              },
              {
                name: 'Ford',
                value : 'ford'
              },
              {
                name: 'Chevrolet',
                value : 'chevrolet'
              },
              {
                name: 'GMC',
                value : 'gmc'
              },
              {
                name: 'Cadillac',
                value : 'cadillac'
              },
              {
                name: 'Dodge',
                value : 'dodge'
              },
              {
                name: 'Scion',
                value : 'scion'
              }
            ]
          }
        },


        {
          key: 'respondentVehicleColor1',
          type: 'select',
          templateOptions: {

            label: 'Respondent\'s Car Color',
            options: [
              {
                name: 'Blue',
                value : 'blue'
              },
              {
                name: 'Yellow',
                value : 'yellow'
              },
              {
                name: 'Red',
                value : 'red'
              },
              {
                name: 'White',
                value : 'white'
              },
              {
                name: 'Green',
                value : 'green'
              },
              {
                name: 'Brown',
                value : 'brown'
              },
              {
                name: 'Black',
                value : 'black'
              },
              {
                name: 'Brown',
                value : 'brown'
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
        {
          key: 'respondentOtherLocationName1',
          type: 'input',
          templateOptions:{
            label: 'Please enter another location the offender frequents',
            placeholder: 'other location he/she may live',

          }
        },
        {
          key: 'respondentOtherLocationType1',
          type: 'input',
          templateOptions: {
            label: 'Description of the other location the offender frequents'
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
          key: 'respondentOtherLocationTimes1',
          type: 'input',
          templateOptions:{
            label: 'Enter times the offender might possibly be at this location',

          }
        }
      ]
    },






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
 { name:respondentSex, x:310, y:353, page:0},DONE
 { name:respondentRace, x:369, y:353, page:0},DONE
 { name:respondentDOB, x:432, y:353, page:0},DONE
 { name:respondentHeight, x:489, y:353, page:0},DONE
 { name:respondentWeight, x:540, y:353, page:0},DONE
 { name:respondentEyes, x:312, y:320, page:0},DONE
 { name:respondentHair, x:370, y:320, page:0},DONE
 { name:respondentSSNLastFour, x:468, y:320, page:0},DONE
 { name:respondentDistinguishingFeatures1, x:300, y:297, page:0},DONE
 { name:respondentDistinguishingFeatures2, x:300, y:282, page:0},DONE
 { name:respondentDriversLicenseState, x:445, y:273, page:0},DONE
 { name:respondentDriversLicenseState, x:522, y:273, page:0},DONE
 { name:respondentOtherLocationName1, x:40, y:178, page:0},DONE
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
 { name:respondentVehicleMake1, x:40, y:92, page:0},DONE
 { name:respondentVehicleModel1, x:173, y:92, page:0},
 { name:respondentVehicleColor1, x:310, y:92, page:0},
 { name:respondentVehiclePlates1, x:448, y:92, page:0},
 { name:respondentVehicleMake2, x:40, y:78, page:0},
 { name:respondentVehicleModel2, x:173, y:78, page:0},
 { name:respondentVehicleColor2, x:310, y:78, page:0},
 { name:respondentVehiclePlates2, x:448, y:78, page:0}
 */
