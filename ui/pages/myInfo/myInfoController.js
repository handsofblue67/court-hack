import app from '../../app';
import states from './states';

app.controller('myInfoController', ng(function($state) {
  this.myInfo = {};

  let wrapRow = (els) => {
    return {
      elementAttributes: {
        layout: 'row'
      },
      fieldGroup: els
    }
  }

  let firstName = {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      label: 'First Name',
      placeholder: "First Name"
    },
    elementAttributes: {
      flex: '2'
    }
  }

  let middleName = {
    key: 'middleName',
    type: 'input',
    templateOptions: {
      label: 'Middle Name',
      placeholder: "Middle Name"
    },
    elementAttributes: {
      flex: '2'
    }
  }

  let lastName = {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      label: 'Last Name',
      placeholder: "Last Name"
    },
    elementAttributes: {
      flex: '2'
    }
  }

  let suffix = {
    "key": "suffix",
    "type": "select",
    "templateOptions": {
      "label": "Suffix",
      "options": [{
        "name": "Sr.",
        "value": "sr"
      }, {
        "name": "Jr.",
        "value": "jr"
      }]
    },
    elementAttributes: {
      flex: '1'
    }
  }

  let ssn = {
    key: 'ssn',
    type: 'input',
    templateOptions: {
      required: true,
      label: "Social Security Number",
      placeholder: "______-___-_________",
      pattern: "^\\d{3}-\\d{2}-\\d{4}$"
    }
  }

  let birthdate = {
    key: 'birthdate',
    type: 'input',
    templateOptions: {
      reuired: true,
      label: 'Birthdate',
      placeholder: 'mm-dd-yyyy',
      pattern: "^\\d{2}-\\d{2}-\\d{4}$"
    }
  }

  let gender = {
    key: 'gender',
    type: 'select',
    templateOptions: {
      label: 'Gender',
      "options": [{
        'name': "Male",
        'value': 'male'
      }, {
        'name': "Female",
        'value': 'female'
      }]
    }
  }

  let email = {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email'
    }
  }

  let streetAddrHome = {
    key: "homeStreetAddr",
    type: 'input',
    templateOptions: {
      label: 'Current Home Address',
      placeholder: 'Street'
    }
  }

  let city = {
    key: "homeCity",
    type: 'input',
    templateOptions: {
      label: 'City'
    }
  }

  let state = {
    key: "homeState",
    type: 'select',
    templateOptions: {
      label: 'State',
      options: states
    }
  }

  let zip = {
    key: "homeZip",
    type: 'input',
    templateOptions: {
      label: 'Zip',
      reuired: true,
      pattern: "^\\d{5}$"
    }
  }

  let employerName = {
    key: 'employerName',
    type: 'input',
    templateOptions: {
      label: 'Current Employer',
      placeholder: 'Employer Name'
    }
  }

  let employerStrAddr = {
    key: "employerStrAddr",
    type: 'input',
    templateOptions: {
      label: 'Employer Address',
      placeholder: 'Employer Address'
    }
  }

  let employerCity = {
    key: "employerCity",
    type: 'input',
    templateOptions: {
      label: 'Employer City',
      placeholder: 'Employer Address'
    }
  }

  let employerState = {
    key: "employerState",
    type: 'select',
    templateOptions: {
      label: 'State',
      options: states
    }
  }

  let employerZip = {
    key: "employerZip",
    type: 'input',
    templateOptions: {
      label: 'Zip',
      reuired: true,
      pattern: "^\\d{5}$"
    }
  }

  this.myInfoFields = [
    wrapRow([firstName, middleName, lastName, suffix]),
    wrapRow([gender, birthdate]),
    wrapRow([ssn, email]),
    streetAddrHome,
    wrapRow([city, state, zip]),
    wrapRow([employerName, employerStrAddr]),
    wrapRow([employerCity, employerState, employerZip]),
  ]

  this.next = () => {
    $state.go('somewhere')
  }
}));
