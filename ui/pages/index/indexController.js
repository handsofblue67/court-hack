import app from '../../app'

app.controller('indexController', ng(function () {
  this.data = {}

  this.fields = [
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
