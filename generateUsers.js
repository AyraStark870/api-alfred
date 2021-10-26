const faker = require("faker");


function generateUsers(){
  const usersArray = [];
  for (let index = 0; index < 20; index++) {
    usersArray.push({
      id: index,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber()
    });
  }
  return usersArray
}

module.exports =  generateUsers