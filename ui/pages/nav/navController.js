import app from '../../app'

app.controller('navController', ng(function ($mdSidenav) {
  this.toggleLeft = () => {
    $mdSidenav('left').toggle();
  }
}))
