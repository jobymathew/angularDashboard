'use strict';

angular.
  module('knowledgeBase').
  component('sidebar', {
    templateUrl: 'knowledge-base/components/sidebar/sidebar.template.html',
    controller: function siderBarController() {
      this.items = [
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcc95d1054c5d962e844df7bd6decb4d3482b7e0c08b8e35b61f5a99a4e20452?",
          name: 'Dashboard',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03a6fe490ecdb9275f9ee5675e3db06a679251bf76d6058c15b388a1a1d33751?",
          name: 'Orders',
          notification: true,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b21677766697231eb46271eb48ecab917feba2782b61c33c9328e4f8e89a005f?",
          name: 'Products',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70dcf82e6e89663a3a1cb5d8c3432102b6dcf7551871fd71f95e65099fe758fd?",
          name: 'Categories',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b198df79a24eed0eaa15716a3c160858d02d32b661fc36e5986068e14246108?",
          name: 'Customers',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/081faf2654a7b65c6eb6ec315da516906c67921b31ce75974a4c4c242bdd289b?",
          name: 'Reports',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f58f6cf4acacf21c254176ec48a84347a68219cb3d57f2319436cdff736d01c?",
          name: 'Coupons',
          notification: false,
        }, 
        {
          imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d28ebd696374b6878253a42fd912504d9effa3dd4259357925d32a403eeb72?",
          name: 'Inbox',
          notification: false,
        },
      ];
    }
  });