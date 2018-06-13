// import CustomerRegistrationError from '../../error/services/customer-registration-error';

CustomerFactory.$inject = ['CustomerRegistrationError'];
/**
 * @ngdoc service
 * @name customer.service:CustomerFactory
 * @constructor
 * @description
 * Represantation of customer
 */
export function CustomerFactory(CustomerRegistrationError){

    class Customer {
        constructor(customer) {
    
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
            if (!this.name || !this.country || !this.city || !this.mail) {
                throw new CustomerRegistrationError('Please fill all the fields.')
            }
        }
    }
    
    Customer.getByMail = getByMail;
    Customer.list = list;
    Customer.collection = [
        new Customer({
            email: 'attila.satan@gmail.com',
            name: 'Attila Satan',
            country: 'Turkey',
            city: 'Ankara'
        }), new Customer({
            email: 'cigdem.satan@gmail.com',
            name: 'Çiğdem Satan',
            country: 'Turkey',
            city: 'Ankara'
        })
    ]
    
    
    /**
     * @ngdoc
     * @name custom.service.Customer.getByMail
     * @description Finds customer by emain and returs if its exist. Else returns nul.
     * @param {string} mail Customer email.
     * @returns {Customer||null} Customer found base on mail. 
     */
    function getByMail(mail) {
    
        for (let c of this.collection) {
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
    
        return collection;
    }

    return Customer;
} 


