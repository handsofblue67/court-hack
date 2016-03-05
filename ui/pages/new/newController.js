import app from '../../app'

app.controller('newController', ng(function ($state, db) {

  this.beginManualEntry = () => {
    db.saveCase({}).then((data) => {
      let id = 1 // TODO get id from data
      $state.go('nav.application.myInfo', {id})
    })
  }

  this.beginWithFacebook = () => {
    alert("Sorry, this feature didn't make it...")
  }

}))
