class CustomerEditController{
    constructor(customer){
        const vm = this;

        vm.customer = customer;
        if(!vm.customer.email) {
            vm.edit = true;
        }
    }
}
CustomerEditController.$inject = ['customer'];
export default CustomerEditController