import { Customer } from './customer';
import { SalesRep } from './salesRep';

const customer: Customer = new Customer(
  'Andrew Jones', 
  'Wheeler', 
  '', 
  'andy@andy',
  'admin',
  new Date(),
  new Date(),
  true,
  5,
  new Date()
  )

  console.log(customer);

const firstName: string = customer.firstName();
console.log(firstName);

const fullName: string = customer.fullName();
console.log(fullName);

const salesRep: SalesRep = new SalesRep(
  'Jack Barker', 
  'Lansky', 
  'J', 
  'jack@jack',
  'sales',
  new Date(),
  new Date(),
  true,
  3,
  ['Greg', 'Andrew']
)

console.log(salesRep);