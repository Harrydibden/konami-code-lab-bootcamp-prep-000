const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var i = 0;

function keyDown(e) {
  var key = e.key;
  console.log(key);
  if(key === codes[i]){
    i++;
    if(i === codes.length){
      alert("Well Done!");
      i = 0;
    } 
  } else {
    i = 0;
    alert("Start Again");
  }
}

document.body.keyDown()

