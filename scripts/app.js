



(function () {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                //templateUrl: _templateBase + 'bat.html' ,
                templateUrl: _templateBase +'/files.html' ,
                controller: 'batCrtl',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);

    messenger = require('ipc');

})();
