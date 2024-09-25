
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

const leastFavoriteCustomer = 'someone else';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; 
}
