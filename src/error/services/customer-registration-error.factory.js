 function CustomerRegistrationErrorFactory(){

    return class CustomerRegistrationError extends Error {
        constructor(message){
            super(message)
            this.type = 'MissingInput' // There could be more types for diffrent scenarios. 
        }
    }
}

export default CustomerRegistrationErrorFactory;