import app from './app'

import navTemplate from "./pages/navTemplate.html"
// import navController from "./pages/navTemplate.html"

app.config(ng( ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('nav', {
      url: '',
      template: navTemplate
    })
}))
