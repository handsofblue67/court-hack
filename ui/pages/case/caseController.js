import app from '../../app'

app.controller('caseController', ng(function ($stateParams, caseData) {
  this.$stateParams = $stateParams
  this.caseData = caseData
}))
