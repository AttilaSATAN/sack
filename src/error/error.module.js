
import CustomerRegistrationErrorFactory from "./services/customer-registration-error.factory";

const error = angular.module('error', [])

error.factory('CustomerRegistrationError', CustomerRegistrationErrorFactory);

export default error;