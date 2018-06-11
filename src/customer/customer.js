import customerCollectionProvider from './customer-collection';

/**
 * @ngdoc service
 * @name customer.service:Customer
 * @constructor
 * @description
 * Represantation of customer
 */
export class Customer {
    constructor(customer) {
        // if (!customer.name || !customer.country || !customer.city || !customer.mail) {
        //     throw new CustomerRegistrationError('Please fill all the fields.')
        // }
        this.mail = customer.mail;
        this.name = customer.name;
        this.country = customer.country;
        this.city = customer.city;
    }

    /**
     * @ngdoc method
     * @name customer.service.Customer#save
     * @description
     * Persists updates or newly created Customer.
     */
    save() {

    }
}

Customer.$inject = ['CustomerRegistrationError'];
Customer.getByMail = getByMail;
Customer.list = list;

const customerCollection = customerCollectionProvider(Customer);

/**
 * @ngdoc
 * @name custom.service.Customer.getByMail
 * @description Finds customer by emain and returs if its exist. Else returns nul.
 * @param {string} mail Customer email.
 * @returns {Customer||null} Customer found base on mail. 
 */
function getByMail(mail) {

    for (let c of customerCollection) {
        if (c.mail === mail)
            return new Customer(c);
    }

    return null;
}

/**
 * @description Returns a list of customers.
 * @returns {[<Customer>]} Array of customers as Customer instances
 */
function list() {

    return customerCollection;
}

