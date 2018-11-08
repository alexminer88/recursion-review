// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
if num
  return num.toString()
if null
  return null
if boolean
  return String(boolean)
if array
var output: '['
  for el of obj
      return output + obj[i] + ', '
  if obj.length === 0
      output += ']'
  else
      return output.slice(0, -1) + ']'
if obj
var output = '{'
if Object.keys(obj).length === 0
  return obj + '}'
for key in obj
  output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ', ';
return output.slice(0, -2) + '}';
*/

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return null;    
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'number') {
    return obj.toString();  
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return String(obj);
  } else if (Array.isArray(obj)) {
    var output = '[';
    if (obj.length === 0) {
      return output + ']';
    }
    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]) + ',';
    }
    output = output.slice(0, -1);
    return output + ']';
  } else if (typeof obj === 'object') {
    var output = '';
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + output.slice(0, -1) + '}';
  }
};


// var stringifyJSON = function(obj) {
  
//   if (obj === undefined || typeof obj === 'function') {
//     return null;    
//   }
  
//   if (typeof obj === 'string') {
//     return '\"' + obj + '\"';
//   }

//   if (typeof obj === 'number') {
//     return obj.toString();  
//   }

//   if (typeof obj === null) {
//     return null;
//   }

//   if (typeof obj === 'boolean') {
//     return String(obj);
//   }

//   if (Array.isArray(obj)) {
//     var output = '[';

//     if (obj.length === 0) {
//       return output + ']';
//     }
//     for (var i = 0; i < obj.length; i++) {
//       output += stringifyJSON(obj[i]) + ',';
//     }
//     output = output.slice(0, -1);
//     return output + ']';
//   }

//   if (typeof obj === 'object') {
//     var output = '{';

//     if (Object.keys(obj).length === 0) {
//       return output + '}'
//     }
//     for (var key in obj) {
//       output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
//     }
//     return output.slice(0, -1) + '}';
//   }
// };