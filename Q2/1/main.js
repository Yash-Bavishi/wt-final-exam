let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let phone = document.getElementById('phone')
let lname = document.getElementById('lname')
let address = document.getElementById('address')

function verify() {
  let n_val = name.value
  if(n_val.length < 6) { 
      name.style.border="2px solid red" ; 
    }  
  let npassword=password.value 
  if(npassword.length < 6) {
      password.style.border="2px solid red" ; 
  }
  let nemail=email.value 
  for (let x in nemail) {
    if (nemail[x] == '*' || nemail[x] == '!' || nemail[x] == '#' || nemail[x] == '$' || nemail[x] == '^' || nemail[x] == '&' || nemail[x] == '(' || nemail[x] == ')' || nemail[x] == "'" ) {
      email.style.border="2px solid red" ; 
    }
  }
  let nphone=phone.value 
  if (nphone.length < 10) {
      phone.style.border="2px solid red" ; 
  }
  let maddress=address.value 
  if (maddress == "") {
      address.style.border="2px solid red" ; 
  }
  let nlname = lname.value
  if (nlname == "") {
      lname.style.border="2px solid red" ; 
  }

}
