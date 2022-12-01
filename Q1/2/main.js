
let txt = document.getElementById('txt')
let body = document.getElementById('body')
let para = document.getElementById('para')
function toggle() {
  let itxt = txt.innerText
  if(itxt == "Dark mode") {
    para.style.color = "white";
    body.style.backgroundColor = "black";
    txt.innerText = "Light mode";
  } else if(itxt == "Light mode"){
    para.style.color = "black";
    body.style.backgroundColor = "white";
    txt.innerText = "Dark mode";
  }
}
