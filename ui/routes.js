import app from './app'

import navTemplate from "./pages/nav/navTemplate.html"
import navController from "./pages/nav/navController"
import indexTemplate from "./pages/index/indexTemplate.html"
import indexController from "./pages/index/indexController"
import newTemplate from "./pages/new/newTemplate.html"
import newController from "./pages/new/newController"

import applicationSideBarTemplate from "./pages/application/applicationSideBarTemplate.html"
import myInfoTemplate from "./pages/myInfo/myInfoTemplate.html"
import myInfoController from "./pages/myInfo/myInfoController"
import respondentInfoTemplate from "./pages/respondentInfo/respondentInfoTemplate.html"
import respondentInfoController from "./pages/respondentInfo/respondentInfoController"


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
    .state('nav.application', {
      url: '/order',
      abstract: true,
      views: {
        '': { template: '<ui-view>' },
        sidebar: { template: applicationSideBarTemplate }
      }
    })
    .state('nav.application.myInfo', {
      url: '/my-info',
      template: myInfoTemplate,
      controller: 'myInfoController as vm'
    })
    .state('nav.application.respondentInfo',{
      url: '/respondent-info',
      template:respondentInfoTemplate,
      controller: 'respondentInfoController as vm'
    });
}));
