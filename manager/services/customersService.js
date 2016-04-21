//This handles retrieving data and is used by controllers
manager.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    var customers = [
        {
            id: 1, firstName: 'Bruce', lastName: 'Lee', address: '556 Dodge St.', city: 'Phoenix',
            orders: [
                { product: 'Pants', price: 30, quantity: 10, orderTotal: 300 },
                { product: 'Punching bag', price: 15, quantity: 1, orderTotal: 15 },
                { product: 'Sneakers', price: 25, quantity: 1, orderTotal: 25 }
            ]
        },
        {
            id: 2, firstName: 'Bobby', lastName: 'Bobbins', address: '54 W. Center St.', city: 'Atlanta',
            orders: [
                { product: 'Table', price: 300, quantity: 1, orderTotal: 300 },
                { product: 'Chair', price: 100, quantity: 4, orderTotal: 400 },
                { product: 'Lamp', price: 40, quantity: 5, orderTotal: 200 },
            ]
        },
        {
            id: 3, firstName: 'Wendy', lastName: 'Handy', address: '455 7th Ave.', city: 'Quebec',
            orders: [
                { product: 'Brush', price: 13, quantity: 3, orderTotal: 39 },
                { product: 'Bikini', price: 25, quantity: 1, orderTotal: 25 },
                { product: 'Hat', price: 55, quantity: 1, orderTotal: 55 },
                { product: 'Ice cream', price: 5, quantity: 1, orderTotal: 5 }
            ]
        },
        {
            id: 4, firstName: 'Any', lastName: 'Key', address: '8966 N. Crescent Dr.', city: 'New York City',
            orders: [
                { product: 'Baseball', price: 10, quantity: 5, orderTotal: 50 },
                { product: 'Bat', price: 20, quantity: 1, orderTotal: 200 }
            ]
        },
        {
            id: 5, firstName: 'Jack', lastName: 'Daniels', address: '55 S. Hollywood Blvd', city: 'Los Angeles'
        },
        {
            id: 6, firstName: 'Victor', lastName: 'Bryan', address: '563 N. Rainier St.', city: 'Seattle',
            orders: [
                { product: 'Speakers', price: 500, quantity: 1, orderTotal: 500 },
                { product: 'iPod', price: 350, quantity: 1, orderTotal: 350 }
            ]
        },
        {
            id: 7, firstName: 'James', lastName: 'Bond', address: '007 secret St.', city: 'Las Vegas',
            orders: [
                { product: 'Milk', price: 10, quantity: 20, orderTotal: 200 },
                { product: 'Pickles', price: 12, quantity: 20, orderTotal: 240 }
            ]
        },
        {
            id: 8, firstName: 'Molly', lastName: 'Holly', address: '33 S. Lake Blvd', city: 'Chicago',
            orders: [
                { product: 'red socks', price: 5, quantity: 10, orderTotal: 50 },
                { product: 'glasses', price: 20, quantity: 1, orderTotal: 20 }
            ]
        },
        {
            id: 9, firstName: 'Alice', lastName: 'Milano', address: '3354 Town', city: 'Cleveland',
            orders: [
                { product: 'Webcam', price: 100, quantity: 1, orderTotal: 100 },
                { product: 'HDMI Cable', price: 35, quantity: 2, orderTotal: 70 }
            ]
        },
        {
            id: 10, firstName: 'Dan', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', city: 'Buffalo',
            orders: [
                { product: 'Truck', price: 1000, quantity: 4, orderTotal: 4000 },
                { product: 'Pedal', price: 400, quantity: 1, orderTotal: 400 }
            ]
        },
        {
            id: 11, firstName: 'Lady', lastName: 'Smile', address: '459 S. International Dr.', city: 'Orlando'
        }
    ];
});