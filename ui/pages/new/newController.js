import app from '../../app'

app.controller('newController', ng(function ($http) {
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

  this.loginWithFacebook = () => {
    $http.get('/api/login/facebook').then((data) => {
      console.log(data);
    })
  }

}))
