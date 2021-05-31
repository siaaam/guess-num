let buttonGuess = document.querySelector('#guessBtn')
let resetBtn = document.querySelector('#resetBtn')
let input = document.querySelector('#inputBox')
let dynamic = document.querySelector('#dynamic')
let counter = 0;

buttonGuess.addEventListener('click',btnFunc)
resetBtn.addEventListener('click',resetFunc)



function btnFunc(){
  counter++
  if(counter > 0 && counter<= 5){
    let randomNumber =  Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    let val = Number(input.value)
    if(!isNaN(val)){
      if(val === randomNumber){
        createElementFunc('green','matched')
      } else{
        createElementFunc('warn','not matched')
      }
    } else {
      alert('you must put number value')
    }
    input.value  = ''
  }
  else{
    alert('game over.please reset')
  }
}

function resetFunc(){
  counter = 0
  input.value = ''
  let dynamicP = Array.from(dynamic.children)
  dynamicP.forEach(elem => elem.style.display = 'none')
}


function createElementFunc(className,text){
  let p = document.createElement('p')
  p.classList.add(className)
  text = document.createTextNode(text)
  p.append(text)
  dynamic.appendChild(p)
}

