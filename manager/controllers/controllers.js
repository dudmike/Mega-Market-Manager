//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the customers view
manager.controller('CustomersController', function ($scope, customersService) {
    //Wrote customers array, insertCustomer, deleteCustomer in $scope for the view
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };
});

//The $scope is bound to the orders view
manager.controller('OrdersController', function ($scope, customersService) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});
//This controller is used in the ordersTable view
manager.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product'; 
    $scope.reverse = false; //For the sort order
    $scope.ordersTotal = 0; //Total value of all customer's orders

    init();

    function init() {
        if ($scope.customer && $scope.customer.orders) {
            var total = 0;
            for (var i = 0; i < $scope.customer.orders.length; i++) {
                var order = $scope.customer.orders[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});

//The $scope is bound to the order view
manager.controller('CustomerOrdersController', function ($scope, $routeParams, customersService) {
    $scope.customer = {};
    $scope.ordersTotal = 0;

    init();

    function init() {     
        var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
        if (customerID > 0) {
            $scope.customer = customersService.getCustomer(customerID);
        }
    }

});