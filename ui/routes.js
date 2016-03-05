import app from './app'

import navTemplate from "./pages/nav/navTemplate.html"
import navController from "./pages/nav/navController"
import indexTemplate from "./pages/index/indexTemplate.html"
import indexController from "./pages/index/indexController"
import newTemplate from "./pages/new/newTemplate.html"
import newController from "./pages/new/newController"
import resumeTemplate from "./pages/resume/resumeTemplate.html"
import resumeController from "./pages/resume/resumeController"
import caseTemplate from "./pages/case/caseTemplate.html"
import caseController from "./pages/case/caseController"

import applicationTemplate from "./pages/application/applicationTemplate.html"
import applicationSideBarTemplate from "./pages/application/applicationSideBarTemplate.html"
import myInfoTemplate from "./pages/myInfo/myInfoTemplate.html"
import myInfoController from "./pages/myInfo/myInfoController"
import respondentInfoTemplate from "./pages/respondentInfo/respondentInfoTemplate.html"
import respondentInfoController from "./pages/respondentInfo/respondentInfoController"


import './services/db'

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
    .state('nav.resume', {
      url: '/resume',
      template: resumeTemplate,
      controller: 'resumeController as vm'
    })

    // Form routes
    .state('nav.case', {
      url: '/case/{id}',
      template: caseTemplate,
      controller: 'caseController as vm',
      resolve: {
        caseData: ng((db, $stateParams) => db.getCase($stateParams.id))
      }
    })
    .state('nav.application', {
      url: '/case/{id}/form',
      abstract: true,
      resolve: {
        caseData: ng((db, $stateParams) => db.getCase($stateParams.id))
      },
      views: {
        '': { template: applicationTemplate },
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
