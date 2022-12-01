

function rev(num) {
  if (num < 0) {
    let test = num.toString()
    let new_test = test.slice(1)
    let rem = 0;
    let temp = parseInt(new_test);

    while (temp != 0) {
      rem = (rem * 10) + (temp % 10);
      temp = Math.floor(temp / 10);
    }
    
    test = rem.toString();
    new_test = '-'+test 
    return new_test

  }
  let rem = 0;
  let temp = num;

  while (temp != 0) {
    rem = (rem * 10) + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  
  return rem.toString()

}

console.log(rev(123))

