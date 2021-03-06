var button =  document.querySelector('[data-calc-btn]');

button.addEventListener('click', function(event){

   event.preventDefault();

   /*PEGANDO VALORES DO INPUT*/
   var inputA = document.querySelector('[data-a-value]');
   var inputB = document.querySelector('[data-b-value]');
   var inputC = document.querySelector('[data-c-value]');

   var valueA = inputA.value;
   var valueB = inputB.value;
   var valueC = inputC.value;
   /*-------------------------------------------------------*/
   
   /*ANALISANDO O DELTA*/
   if(valueA == 0){
      document.getElementById("first_error").textContent = "Valor de A deve ser diferente de zero";
      document.getElementById("delta").textContent = "Delta: n/a";
      document.getElementById("first_root").textContent = "X1: n/a";
      document.getElementById("second_root").textContent = "X2: n/a";
      return 0;
   }
   /*-------------------------------------------------------------------------------------------------*/

   /*CALCULADNO DELTA*/
   var delta = calcDelta(valueA, valueB, valueC);
   /*---------------------------------------------*/

   /*CALCULANDO RAIZES*/
   var x1 = calcX1_Root(valueA, valueB, delta);
   var x2 = calcX2_Root(valueA, valueB, delta);
   /*-------------------------------------------*/

   /*COLOCANDO RESULTADO NA TELA*/
   document.getElementById("delta").textContent = "Delta: " + delta;
   document.getElementById("first_root").textContent = "X1: " + x1;
   document.getElementById("second_root").textContent = "X2: " + x2;
   /*-------------------------------------------*/

});

function calcDelta(a, b, c){
   
   var delta = Math.pow((b), 2) - (4 * a * c);
   return delta;
   
}

function calcX1_Root(a, b, delta){
   if (delta < 0){
      document.getElementById("second_error").textContent = "Equação não possui raízes";
      var x1 = "n/a";
      return x1;
   }

   var x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
   return x1;
   
}

function calcX2_Root(a, b, delta){
   if (delta < 0){
      var x2 = "n/a";
      return x2;
   }

   var x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
   return x2;
}