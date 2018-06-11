
function  customerCollectionProvider(Customer) {

    return [
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
}

export default customerCollectionProvider; 