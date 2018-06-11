import './customer-collection'

/**
 * @ngdoc service
 * @name customer.service:Customer
 * @constructor
 * @description
 * Represantation of customer
 */
class Customer {
    constructor(customer) {
        if (!customer.name || !customer.country || !customer.city || !customer.mail) {
            throw new CustomerRegistrationError('Please fill all the fields.')
        }
        
        this.mail = mail;
        this.name = customer.name;
        this.country = customer.country;
        this.city = customer.city;

    }

    /**
     * @ngdoc method
     * @name customer.service.Customer#save
     * @description
     * Persists updates or newly created Customer instances.
     */
    save() {

    }
}

/* Static methods for Customer class */
Customer.getByMail = getByMail;
Customer.list = list;

/**
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
 * @returns []<Customer>
 */
function list() {


    return customerCollection;
}

