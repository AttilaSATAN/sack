CustomerFactory.$inject = ['CustomerRegistrationError'];
/**
 * @ngdoc service
 * @name customer.service:CustomerFactory
 * @description
 * Provides represantation of Customer
 */
function CustomerFactory(CustomerRegistrationError) {


    /**
     * @class Representation of a customer
     */
    class Customer {
        /**
         * Creates a customer.
         * @param {object} customer
         * @param {string} customer.email
         * @param {string} customer.name
         * @param {string} customer.country
         * @param {string} customer.city
         * @param {number|null|undefined} customer.id
         */
        constructor(customer) {

            this.email = customer.email;
            this.name = customer.name;
            this.country = customer.country;
            this.city = customer.city;
            this.id = customer.id;
        }

        /**
         * @ngdoc method
         * @name customer.service.Customer#save
         * @description
         * Persists updates or newly created Customer.
         */
        async save() {
            if (!this.name || !this.country || !this.city || !this.email) {
                throw new CustomerRegistrationError('Please fill all the fields.')
            }
            if (!this.id && this.id !== 0) { //create
                for (let i in Customer.collection) {
                    if (Customer.collection[i].email === this.email) {
                        throw new CustomerRegistrationError('This email is in use.')
                    }
                }
                Customer.collection.push(this);
                this.id = Customer.collection.length; //ugly but effective in this context;
                return Promise.resolve(this);
            }

            for (let i in Customer.collection) {
                if (Customer.collection[i].id === this.id) {
                    Customer.collection[i] = this;
                    return Promise.resolve(this);
                }
            }
        }
    }

    Customer.getById = getById;
    Customer.list = list;

    /**
     * Storage for customers.
     */
    Customer.collection = [
        new Customer({
            id: 1,
            email: 'attila.satan@gmail.com',
            name: 'Attila Satan',
            country: 'Turkey',
            city: 'Ankara',
        }), new Customer({
            id: 2,
            email: 'cigdem.satan@gmail.com',
            name: 'Çiğdem Satan',
            country: 'Turkey',
            city: 'Ankara',
        })
    ]


    /**
     * @ngdoc
     * @name custom.service.Customer.getById
     * @description Finds customer by id and returs if its exist. Else returns nul.
     * @param {string} mail Customer email.
     * @returns {Customer|null} Customer found base on mail. 
     */
    function getById(id) {

        for (let c of this.collection) {
            if (c.id === 1 * id)
                return new Customer(c);
        }

        return null;
    }

    /**
     * @ngdoc
     * @name custom.service.Customer.getById
     * @description Returns a list of customers.
     * @returns {[<Customer>]} Array of customers as Customer instances
     */

    function list() {

        return this.collection;
    }

    return Customer;
}


export default CustomerFactory;