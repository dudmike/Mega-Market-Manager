var manager = angular.module('manager', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
manager.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: 'manager/partials/customers.html'
            })
        .otherwise({ redirectTo: '/customers' });
});