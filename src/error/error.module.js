import 'angular';
import { CustomerRegistrationError } from "./customer-registration-error.service";

const error = angular.module('error', [])

error.factory('CustomerRegistrationError', CustomerRegistrationError);

export default error;