import app from '../../app'

app.controller('resumeController', ng(function ($state) {

  this.goToCase = (id) => {
    $state.go('nav.case', {id})
  }


}))
