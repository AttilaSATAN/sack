class CustomerEditController{
    constructor($scope, customer, Customer){

        const vm = this;
        this.scope = $scope;
        this.customer = customer;

        if(!this.customer.id && this.customer.id !== 0) {
            this.customer = new Customer({});
            this.edit = true;
        }
    }
    async save(){
        try {
            await this.customer.save();
        } catch(e){
            
        }

        this.scope.$apply(()=>{this.edit = false;})

    }
}

CustomerEditController.$inject = ['$scope', 'customer', 'Customer'];
export default CustomerEditController