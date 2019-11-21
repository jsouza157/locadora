'use strict'

class SearchMovie {
  get rules () {
    return {
      title: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'You must provide a title.'
    }
  }
}

module.exports = SearchMovie
