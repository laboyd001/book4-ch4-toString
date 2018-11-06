// Create an object that represents you. It should have the following properties on it.

// First name
// Last name
// Date of birth
// Place of birth
// Current city of residence
// Current state of residence
// Only the city and the state of residence should be able to be modified by other code in the application. The other properties should be read only (i.e. non-writable).

// Once those are defined, create a method on your object named toString().
console.log("howdy")

const myInfo = Object.create(null, {
  firstName: {
    value: "Lesley"
  },
  lastName: {
    value: "Boyd"
  },
  datOfBirth: {
    value: "December 28"
  },
  placeOfBirth: {
    value: "Owensboro, KY"
  },
  currentCity: {
    value: "Nashville",
    writable: true
  },
  currentState: {
    value: "TN",
    writable: true
  },
  toString: {
    value: function () {
      return `
      ${myInfo.firstName} ${myInfo.lastName} was born in ${myInfo.placeOfBirth}.  She was born on ${myInfo.datOfBirth}.  She currently lives in ${myInfo.currentCity},${myInfo.currentState}
      `
    }
  }
})

console.log(myInfo.toString())

