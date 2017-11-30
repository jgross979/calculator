var display = document.querySelector('#display');
var keys = document.querySelectorAll('.keys');
var compute = document.querySelector('.compute')
var clear = document.querySelector('.clear')

const addToDisplay = [].forEach.call(keys, function(keys){
  keys.addEventListener('click', function(){
    display.value += keys.value
  })
})


const percent = document.querySelector('.percent')
  percent.addEventListener('click', function(){
    display.value = eval(display.value)/100
  })


const clearDisplay = clear.addEventListener('click', function(){
  display.value = ''
})

const computeDisplay = compute.addEventListener('click', function(){
  if(display.value.includes('/0')){
    display.value = 'ERROR'
  }else{
  display.value = eval(display.value)
}
})
