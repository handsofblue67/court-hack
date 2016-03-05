import app from '../app'
import _ from 'lodash'

app.factory('db', ng(function($window, $http, $q){

  class Database {

    constructor (host, port, root='') {
      this.tempData = {}
      this.root = `${host}:${port}${root}`
    }

    createUrl (path) {
      return [`${$window.location.protocol}//`, this.root, path].join('')
    }

    getCase (id) {
      return $q.when(this.tempData)
      // let url = this.createUrl('/case', {id})
      // return $http.get(url).then(({data}) => data)
    }

    saveCase (caseData) {
      this.tempData = _.extend({}, this.tempData, caseData)
      console.log('Saved:', this.tempData);
      return $q.when(this.tempData)
      // let url = this.createUrl('/case')
      // return $http.post(url, caseData).then((data) => {
      //   console.log('Save response:', data);
      //   return data
      // })
    }
  }

  return new Database('localhost','3000', '/api')
}))
