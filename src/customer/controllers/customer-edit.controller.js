
/**
  * @this vm
  * @ngdoc controller
  * @name customer.controller:CustomerEditController
  *
  * @description
  * Controller for customer edit page.
*/
class CustomerEditController{
    constructor($scope, customer, Customer){

        this.scope = $scope;
        this.customer = customer;

        if(!this.customer.id && this.customer.id !== 0) {
            this.customer = new Customer({});
            this.edit = true;
        }
    }
    async save(){
        
        this.error = null;

        try {
            await this.customer.save();
        } catch(e){
            return this.scope.$apply(()=>{this.error = e;})
        }

        this.scope.$apply(()=>{this.edit = false;})

    }
}

CustomerEditController.$inject = ['$scope', 'customer', 'Customer'];
export default CustomerEditController
