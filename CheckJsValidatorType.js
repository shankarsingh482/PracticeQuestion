/*

const obj = {
    age_int: 2,
    name_string: "Adam",
    job: null,
}
const validatingObject = typeCheck(obj)
validatingObject.age_int = 2.25 // Throws error
validatingObject.age_int = 2
validatingObject.job = "fireman"
validatingObject.address_string = 20 // Throws error

const obj_2 = {
    employed_bool: "true",
}
const validatingObject = typeCheck(obj_2) // Throws error

*/


function typeCheck(object) {
  if (object && typeof object === "object") {
    const initialObject = checkObjectTypeLogic(object)
    const proxyValue = new Proxy(initialObject, validator);
    return proxyValue;
  } else {
    console.log("Not an object!")
    return undefined;
  }
}

function checkObjectTypeLogic(object) {
  for (key in object) {

    if (key.indexOf('_') !== -1) {
      if (key.includes('string')) {
        if (typeof (object[key]) !== 'string') {
          throw Error;
        }
      } else if (key.includes('int') || key.includes('float') || key.includes('number')) {
        if (typeof (object[key]) !== 'number') {
          throw Error;
        } else if (key.includes('int')) {
          if (!Number.isInteger(object[key])) {
            throw Error;
          }
        } else if (key.includes('float')) {
          if (Number.isInteger(object[key])) {
            throw Error;
          }
        }
      } else if (key.includes('bool')) {
        if (typeof (object[key]) !== 'boolean') {
          throw Error;
        }
      } else if (typeof (object[key] === 'object')) {
        checkObjectTypeLogic(object[key])
      }
    }

  }
  return object;
}

const validator = {
  set(target, property, value) {
    if (property.indexOf('_') !== -1) {
      if (property.indexOf('string') !== -1) {
        if (typeof (value) != 'string') {
          throw Error;
        }
      } else if (property.indexOf('int') !== -1 || property.indexOf('float') !== -1 || property.indexOf('number') !== -1) {
        if (typeof (value) !== 'number') {
          throw Error;
        } else if (property.indexOf('int') !== -1) {
          if (!Number.isInteger(value)) {
            throw Error;
          }
        } else if (property.indexOf('float') !== -1) {
          if (Number.isInteger(value)) {
            throw Error;
          }
        }
      } else if (property.indexOf('bool') !== -1) {
        if (typeof (value) !== 'boolean') {
          throw Error;
        }
      } else if (typeof (object[key] === 'object')) {
        //srikanth: this needs to be improved, it doesn't work
        const proxy = new Proxy(object[key], validator);
        return proxy;
      }
      return target[property] = value
    } else {
      return target[property] = value
    }

  }
}

module.exports = typeCheck;
