'use strict';

angular.
  module('knowledgeBase').
  component('knowledgeBase', {
    templateUrl: 'knowledge-base/knowledge-base.template.html',
    controller: ['$http', function knowledgeBaseController($http) {
      var self = this;
      self.smallCardData = [
        {
          title: "Community Forum",
          content: "Get help from community members, ask any questions and get answers faster.",
          link: "Join Community"
        },
        {
          title: "Webinars",
          content: "Join our series of webinars where you can ask questions live and see a presentation.",
          link: "Register"
        }
      ];
      self.cardData = [
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0ee3cfb8699b90b3eeca65fdb3cbaf7c8dd3ce48c08aee64c964a19cf6f9fa4?",
          header: "Getting Started",
          content: [
            'Guide to get started faster',
            'Video tutorials for beginners',
            'Moving to Bolt system',
          ]
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0af62736937a805cf07496b9e9e90fadf41c2dd82c574de243a6fcee260493b?",
          header: "Personal Settings",
          content: [
            'Setting up your profile',
            'Changing business name',
            'Changing email address',
          ]
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a3406227cfae2f0b5cae685705d504248418f6c6285b50a815bc7a71ee3f7d1?",
          header: "Billing",
          content: [
            'Payment declined',
            'Get a refund',
            'Subscriptions',
          ]
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/824e4b8547c57ea610c4194d17e2290c4e241f5b02042c2ba0007faea23b8e36?",
          header: "Commerce",
          content: [
            'Add products',
            'Selling guide',
            'Create categories',
          ]
        },
      ];
    }]
  });
