import _ from 'lodash'

const birthYear = [1974, 1998, 2002, 1995, 1985]

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = _.map(numbers, num => num * 2)
const stuff = _.map(numbers, num => num + '0')
const age = _.map(birthYear, year => 2023 - year)


//const driverLicense

const licenseYear = _.map(birthYear, year => year + 18)
