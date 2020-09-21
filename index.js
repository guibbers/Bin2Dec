const bin = document.querySelector("#bin");
const res = document.querySelector('#res');
const submit = document.querySelector('#submit')

bin.addEventListener('keydown', function(ev){
   if(ev.keyCode != 48 && ev.keyCode != 49 && ev.keyCode != 8 
      && ev.keyCode != 97 && ev.keyCode != 96 && ev.keyCode != 46
      && ev.keyCode != 37 && ev.keyCode != 39 && ev.keyCode != 17
      && ev.keyCode != 67 && ev.keyCode != 86 && ev.keyCode != 88) {
         ev.preventDefault();
   }
});

bin.addEventListener('keyup', function(e){
   if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector('#submit').click();
   }
});

submit.addEventListener('click', function(){
   let binary = document.querySelector('#bin').value;
   if(binary == ''){
      res.innerHTML = 'Not a valid number!'
   } else {
   let digit = parseInt(binary, 2);   
   res.innerHTML = digit;
   }
});