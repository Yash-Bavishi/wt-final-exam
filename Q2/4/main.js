let age = document.getElementById('age')
let exp = document.getElementById('exp')
let ans = document.getElementById('ans')

function answer() {
  let vage = parseInt(age.value);
  let vexp = exp.value;
  
  console.log(vexp)
  if (vage >= 35 && vexp == "exp") {
    ans.innerText = "Salaray is 6000"
  } else if (vexp == "exp" && (vage >= 28 && vage < 35)) {
    ans.innerText = "Salaray is 4800"
  } else if (vexp == "inexp" && vage < 28) {
    ans.innerText = "salary is 2000"
  } else if (vexp == "exp" && vage < 28) {
    ans.innerText = "salary is 3000"
  }

}
