import app from '../../app'

app.controller('newController', ng(function ($state, db) {
  this.beginManualEntry = () => {
    db.createCase({}).then((data) => {
      let {id} = data
      $state.go('nav.case.application.myInfo', {id})
    })
  }

  this.beginWithFacebook = () => {
    alert("Sorry, this feature didn't make it...")
  }

}))
