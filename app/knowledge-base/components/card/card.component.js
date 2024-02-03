'use strict';

angular.
  module('knowledgeBase').
  component('card', {
    bindings: {
      data: '<'
    },
    templateUrl: 'knowledge-base/components/card/card.template.html',
  });