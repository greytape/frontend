function triangle(num) {
  var spaces;
  var stars;
  for (idx = 1; idx <= num; idx += 1) {
    spaces = ' '.repeat(num - idx);
    stars = '*'.repeat(idx);
    console.log(spaces + stars);
  }
}

triangle(5);

/*    *
   **
  ***
 ****
******/

triangle(9);

/*        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
**********/