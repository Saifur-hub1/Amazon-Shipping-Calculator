function calculate(){
  const inputElement = document.querySelector('.js-input');
  let val = Number(inputElement.value);
  if(val>40) val+=10;
  document.querySelector('.js-result').innerHTML = `$${val}`;
}

function handleKey(event){
  if(event.key == "Enter") calculate();
}