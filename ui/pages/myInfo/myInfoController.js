import app from '../../app';
import states from './states';

app.controller('myInfoController', ng(function () {
  this.myInfo = {};

  this.myInfoFields = [
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name',
            placeholder: "First Name"
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: 'midleName',
          type: 'input',
          templateOptions: {
            label: 'Middle Name',
            placeholder: "Middle Name"
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            placeholder: "Last Name"
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          "key": "suffix",
          "type": "select",
          "templateOptions": {
            "label": "Suffix",
            elementAttributes:{
              flex: '1'
            },
            "options": [
              {
                "name": "Sr.",
                "value": "sr"
              },
              {
                "name": "Jr.",
                "value": "jr"
              }
            ]
          }
        }
      ]
    },
    {
      key: 'ssn',
      type: 'input',
      templateOptions: {
        required: true,
        label:"Social Security Number",
        pattern: "^\\d{3}-\\d{2}-\\d{4}$"
      }
    },
    {
      key: 'birthdate',
      type: 'input',
      templateOptions : {
        reuired: true,
        label: 'Birthdate',
        pattern:  "^\\d{2}-\\d{2}-\\d{4}$"
      }
    },

    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        "options": [
          {
            'name': "Male",
            'value': 'male'
          },
          {
            'name': "Female",
            'value': 'female'
          }
        ]
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key: "streetAddrHome",
          type: 'input',
          templateOptions: {
            label: 'Current Home Address'
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: "city",
          type: 'input',
          templateOptions: {
            label: 'City'
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: "State",
          type: 'select',
          templateOptions: {
            label: 'State',
            options: states
          },
          elementAttributes: {
            flex: '1'
          }
        },
      ]
    },

    {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: [
        {
          key: "zip",
          type: 'input',
          templateOptions: {
            label: 'Zip',
            reuired: true,
            pattern: "^\\d{5}$"
          },
          elementAttributes: {
            flex: '1'
          }
        }
      ]
    },
    {
      key: 'employerName',
      type: 'input',
      templateOptions: {
        label: 'Name of Current Employer'
      },
      elementAttributes: {
        flex: '1'
      }
    },
    {
      elementAttributes: {
        layour: 'row'
      },
      fieldGroup: [
        {
          key: "employerStrAddr",
          type: 'input',
          templateOptions: {
            label: 'Address of Employer'
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: "employerCity",
          type: 'input',
          templateOptions: {
            label: 'City'
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: "employerState",
          type: 'select',
          templateOptions: {
            label: 'State',
            options: states
          },
          elementAttributes: {
            flex: '1'
          }
        },
        {
          key: "employerZip",
          type: 'input',
          templateOptions: {
            label: 'Zip',
            reuired: true,
            pattern: "^\\d{5}$"
          },
          elementAttributes: {
            flex: '1'
          }
        }
      ]
    }


  ];


}));
// First Name
// Middle Name
// Last Name
// Suffix, if appropriate
// Social Sec. Number
// Birthdate
// Gender
// Current Home address
// Work Information
// Employer Name
// Street
// City
// State/U.S. Territory
// Zip
