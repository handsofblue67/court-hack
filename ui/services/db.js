import app from '../app'
import _ from 'lodash'

app.factory('db', ng(function($window, $http, $q){

  class Database {

    constructor (host, port, root='') {
      this.root = `${host}:${port}${root}`
    }

    createUrl (path) {
      return [`${$window.location.protocol}//`, this.root, path].join('')
    }

    createCase (caseData) {
      let url = this.createUrl('/application')
      return $http.post(url, caseData).then(({data}) => data)
    }

    getCase (id) {
      let url = this.createUrl(`/application/${id}`)
      return $http.get(url).then(({data}) => data)
    }

    saveCase (caseData) {
      let {id} = caseData
      let url = this.createUrl(`/application/${id}`)
      return $http.put(url, caseData).then(({data}) => data)
    }
  }

  return new Database('localhost','3000', '/api')
}))
