const bin = document.querySelector("#bin");
const res = document.querySelector('#res');
const submit = document.querySelector('#submit');

bin.addEventListener('keyup', function(e){
   if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector('#submit').click();
   }
});

submit.addEventListener('click', function(){
   let num = document.querySelector('#bin').value;   
   if(num == false) {
      res.innerHTML = 'Not a valid number!'
   } else {
      num = parseInt(num);
      let binary = parseInt((num).toString(2));
      res.innerHTML = binary;
   }
});