var app = angular.module('candidateApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/bernie', {
            templateUrl: 'views/bernie.html',
            controller: 'BernieController'
        })
        .when('/hilary', {
            templateUrl: 'views/hilary.html',
            controller: 'HilaryController'
        })
        .when('/donald', {
            templateUrl: 'views/donald.html',
            controller: 'DonaldController'
        })
        .when('/marco', {
            templateUrl: 'views/marco.html',
            controller: 'MarcoController'
        })
}]);

app.controller('BernieController', ['$scope', function($scope) {

}]);

app.controller('HilaryController', ['$scope', function($scope) {

}]);

app.controller('DonaldController', ['$scope', function($scope) {

}]);

app.controller('MarcoController', ['$scope', function($scope) {

}]);

