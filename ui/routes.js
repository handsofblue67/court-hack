import app from './app'

import navTemplate from "./pages/nav/navTemplate.html"
import navController from "./pages/nav/navController"
import indexTemplate from "./pages/index/indexTemplate.html"
import indexController from "./pages/index/indexController"
import newTemplate from "./pages/new/newTemplate.html"
import newController from "./pages/new/newController"
import myInfoTemplate from "./pages/myInfo/myInfoTemplate.html"
import myInfoController from "./pages/myInfo/myInfoController"


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
    .state('nav.new', {
      url: '/new',
      template: newTemplate,
      controller: 'newController as vm'
    })

    // .state('nav.continue', {
    //   url: '/continue',
    //   template: newTemplate,
    //   controller: 'newController as vm'
    // })

    // Form routes
    .state('nav.form', {
      url: '/order',
      abstract: true,
      template: '<ui-view>'
    })
    .state('nav.form.myInfo', {
      url: '/my-info',
      template: myInfoTemplate,
      controller: 'myInfoController as vm'
    })
}))
