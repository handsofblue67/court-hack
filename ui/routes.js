import app from './app'

import navTemplate from "./pages/nav/navTemplate.html"
import navController from "./pages/nav/navController"
import indexTemplate from "./pages/index/indexTemplate.html"
import indexController from "./pages/index/indexController"

app.config(ng( ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('nav', {
      url: '',
      abstract: true,
      template: navTemplate,
      controller: 'navController as vm'
    })
    .state('nav.index', {
      url: '',
      template: indexTemplate,
      controller: 'indexController as vm'
    })
}))
