var numField1 = document.getElementById('numField1')
var numField2 = document.getElementById('numField2')
var resultField = document.getElementById('resultField')
var form =document.getElementById('xIsWhatOfY')

resultField.innerText = "hey"


form.addEventListener('submit', function(){
    
var x =numField1.value 
var y =numField2.value 

alert(x + y)
})