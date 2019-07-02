// Code your solution here!

function printString(myString){
  console.log(myString[0]);
   if (myString.length > 1){
     let mySubString = myString.substring(1, myString.length)
     printString(mySubString)
   } else {
   return true
 }
}

function reverseString(string){
  let length = string.length
  if (length > 1){
    return string[length - 1] + reverseString(string.substring(length-1, string[length-1]))
  } else {
    return string
  }

}

function isPalindrome(string){
  let length =string.length
  if (length === 1 ){
    return true
  } else if (string[0] === string[length-1]){
    return isPalindrome(string.substring(1, length-1))
  }else {
    return false
  }
}

function addUpTo(array, index){
 if (index > 0 ){
   return array[index] + addUpTo(array, index-1)
 } else {
   return array[0]
 }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}
  // maxOf(array)

function includesNumber(array, num){
  let length = array.length
    if (length > 0){
      return array[0] === num ?  true : includesNumber(array.slice(1), num)
    } else {
      return false
    }
}
