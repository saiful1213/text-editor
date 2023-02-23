
document.getElementById('bold-btn').addEventListener('click', function(){
   document.getElementById('text-area').style.fontWeight = 'bold';
})

document.getElementById('italic-btn').addEventListener('click', function(){
   document.getElementById('text-area').style.fontStyle = 'italic';
})

document.getElementById('underline-btn').addEventListener('click', function(){
   document.getElementById('text-area').style.textDecoration = 'underline';
})

document.getElementById('align-left').addEventListener('click', function(){
   document.getElementById('text-area').style.textAlign = 'left';
})

document.getElementById('align-right').addEventListener('click', function(){
   document.getElementById('text-area').style.textAlign = 'right';
})

document.getElementById('align-justify').addEventListener('click', function(){
   document.getElementById('text-area').style.textAlign = 'justify';
})

document.getElementById('align-center').addEventListener('click', function(){
   document.getElementById('text-area').style.textAlign = 'center';
})

document.getElementById('color-picker').addEventListener('click', function(event){
   console.log(event.target.value)
})