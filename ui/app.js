import angular from 'angular'

import 'angular-ui-router'
import 'angular-material'
import 'angular-formly'
import 'angular-formly-material'
import 'angular-messages'

let app = angular.module('courthack', [
  'ui.router',
  'ngMaterial',
  'formly',
  'formlyMaterial'
])

// Store the form data
app.value('formData', {})

export default app
