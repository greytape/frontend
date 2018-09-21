function xor(arg1, arg2) {
  if (!!arg1 && !!arg2 || !arg1 && !arg2 ) {
      return false;
    } 
    return true;
}

console.log(xor(false, true));  
