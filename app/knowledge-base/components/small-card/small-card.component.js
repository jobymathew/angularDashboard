'use strict';

angular.
  module('knowledgeBase').
  component('smallCard', {
    bindings: {
      data: '<'
    },
    templateUrl: 'knowledge-base/components/small-card/small-card.template.html',
  });