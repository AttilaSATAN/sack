// import CustomerRegistrationError from '../../error/services/customer-registration-error';

CustomerFactory.$inject = ['CustomerRegistrationError'];
/**
 * @ngdoc service
 * @name customer.service:CustomerFactory
 * @constructor
 * @description
 * Represantation of customer
 */
function CustomerFactory(CustomerRegistrationError){

    class Customer {
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
            if(!this.id && this.id !== 0) { //create
                //TODO: (optional) check for email
                Customer.collection.push(this);
                this.id = Customer.collection.length -1; //ugly but effective in this context;
                return Promise.resolve(this);
            }
            for(let i in Customer.collection){
                if(Customer.collection[i].id === this.id) {
                    Customer.collection[i] = this;
                    return Promise.resolve(this);
                }
            }
        }
    }
    
    Customer.getByEMail = getByEMail;
    Customer.list = list;
    Customer.collection = [
        new Customer({
            id:0,
            email: 'attila.satan@gmail.com',
            name: 'Attila Satan',
            country: 'Turkey',
            city: 'Ankara',
        }), new Customer({
            id:1,
            email: 'cigdem.satan@gmail.com',
            name: 'Çiğdem Satan',
            country: 'Turkey',
            city: 'Ankara',
        })
    ]
    
    
    /**
     * @ngdoc
     * @name custom.service.Customer.getByEMail
     * @description Finds customer by emain and returs if its exist. Else returns nul.
     * @param {string} mail Customer email.
     * @returns {Customer||null} Customer found base on mail. 
     */
    function getByEMail(email) {
    
        for (let c of this.collection) {
            if (c.email === email)
                return new Customer(c);
        }
    
        return null;
    }
    
    /**
     * @description Returns a list of customers.
     * @returns {[<Customer>]} Array of customers as Customer instances
     */
    function list() {
    
        return this.collection;
    }

    return Customer;
} 


export default CustomerFactory;