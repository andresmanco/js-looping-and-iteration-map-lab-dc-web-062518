// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCase = drivers.map(function (driver) {
  return driver.toLowerCase();
  })
  return lowerCase;
}

function nameToAttributes(drivers) {
  const attr = drivers.map(function (driver){
    const arr = driver.split(" ");
    console.log(driver)
    return Object.assign({}, {firstName: arr[0]}, {lastName: arr[1]})
  })
  return attr
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrases
}
