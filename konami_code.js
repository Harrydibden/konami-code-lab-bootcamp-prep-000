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

const body = document.querySelector("body");

function init(e) {
  const key = e.key;
  let i = 0;
  if(key === codes[i]){
    i++;
    if(i === codes.length){
      alert("Well Done!");
    }
  } else {
    i = 0;
  }
}

body.addEventListener('onkeydown', init(e));
