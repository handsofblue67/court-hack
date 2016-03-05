import app from '../../app'

app.controller('myInfoController', ng(function () {
  this.myInfo = {}

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
        }
      ]
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    }
  ]
}))
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
// Phone
