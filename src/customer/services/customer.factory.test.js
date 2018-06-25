import CustomerFactory from './customer.factory';
import CustomerRegistrationErrorFactory from '../../error/services/customer-registration-error.factory';



const CustomerRegistrationError = CustomerRegistrationErrorFactory();

describe('CustomerFactory', () => {

  test('it provides Customer class ', () => {

    expect(typeof CustomerFactory(CustomerRegistrationError)).toBe('function');

    const Customer = CustomerFactory(CustomerRegistrationError);

    expect(new Customer({})).toBeTruthy();

  });
});

describe('Customer ', () => {

  const Customer = CustomerFactory(CustomerRegistrationError);

  test('has Customer.getById static method and it returns customer with given ID', () => {
    expect(Customer).toHaveProperty('getById');
    expect(typeof Customer.getById).toBe('function');
    expect(Customer.getById(0)).toBeNull();
    expect(Customer.getById(1)).toMatchObject({
      id: 1,
      email: 'attila.satan@gmail.com',
      name: 'Attila Satan',
      country: 'Turkey',
      city: 'Ankara',
    });
    expect(Customer.getById(2)).toMatchObject({
      id: 2,
      email: 'cigdem.satan@gmail.com',
      name: 'Çiğdem Satan',
      country: 'Turkey',
      city: 'Ankara',
    });
    expect(Customer.getById(2)).toBeInstanceOf(Customer);
  });
  test(' has Customer.list static method and it  returns all the customers', () => {
    expect(Customer).toHaveProperty('list');
    expect(typeof Customer.list).toBe('function');
    expect(Customer.list()).toMatchObject([{
      id: 1,
      email: 'attila.satan@gmail.com',
      name: 'Attila Satan',
      country: 'Turkey',
      city: 'Ankara',
    }, {
      id: 2,
      email: 'cigdem.satan@gmail.com',
      name: 'Çiğdem Satan',
      country: 'Turkey',
      city: 'Ankara',
    }]);
  });
});

describe('Customer instances', () => {

  const Customer = CustomerFactory(CustomerRegistrationError);

  test('have properties', () => {
    expect(new Customer({
      id: 2,
      email: 'cigdem.satan@gmail.com',
      name: 'Çiğdem Satan',
      country: 'Turkey',
      city: 'Ankara',
    })).toMatchObject({
      id: 2,
      email: 'cigdem.satan@gmail.com',
      name: 'Çiğdem Satan',
      country: 'Turkey',
      city: 'Ankara',
    });

  });
  test('have Customer#save method', () => {
    expect(new Customer({})).toHaveProperty('save');
    expect(typeof (new Customer({})).save).toBe('function');
  });
});

describe('Customer#save method', () => {

  const Customer = CustomerFactory(CustomerRegistrationError);

  test('returns promise that ', () => {

    expect((new Customer({

      email: 'aname@gmail.com',
      name: 'Dum Dum',
      country: 'Turkey',
      city: 'Ankara',
    })).save()).toBeInstanceOf(Promise);
  });

  test('adds object to collection with id', () => {
    expect(Customer.collection).toContainEqual({
      id: 3,
      email: 'aname@gmail.com',
      name: 'Dum Dum',
      country: 'Turkey',
      city: 'Ankara',
    })
  })
  test('throws `CustomerRegistrationError` if any paramter is missing', async () => {
    try {
      await (new Customer({
        email: 'aname@gmail.com',
        country: 'Turkey',
        city: 'Ankara',
      })).save()
    } catch (error) {

      expect(error.message)
        .toBe('Please fill all the fields.')
    }
    try {
      await (new Customer({
        email: 'aname@gmail.com',
        name: 'Dum Dum',
        city: 'Ankara',
      })).save()
    } catch (error) {

      expect(error.message)
        .toBe('Please fill all the fields.')
    }
    try {
      await (new Customer({
        email: 'aname@gmail.com',
        name: 'Dum Dum',
        country: 'Turkey',

      })).save()
    } catch (error) {

      expect(error.message)
        .toBe('Please fill all the fields.')
    }
    try {
      await (new Customer({
        name: 'Dum Dum',
        country: 'Turkey',
        city: 'Ankara',
      })).save()
    } catch (error) {

      expect(error.message)
        .toBe('Please fill all the fields.')
    }
  });

  test(' throws `CustomerRegistrationError` if email is registered before', async () => {
    try {
      await (new Customer({
        email: 'aname@gmail.com',
        name: 'Dum Dum',
        country: 'Turkey',
        city: 'Ankara',
      })).save()
    } catch (error) {

      expect(error.message)
        .toBe('This email is in use.')
    }
  });

  test(' updates when an Id presented', async () => {
    
    let c = Customer.getById(3);

    c.name = 'Not dumdum';

    await c.save();
    
    expect(Customer.collection).not.toContainEqual({
      id: 3,
      email: 'aname@gmail.com',
      name: 'Dum Dum',
      country: 'Turkey',
      city: 'Ankara',
    });

    expect(Customer.collection).toContainEqual({
      id: 3,
      email: 'aname@gmail.com',
      name: 'Not dumdum',
      country: 'Turkey',
      city: 'Ankara',
    })
  })
});