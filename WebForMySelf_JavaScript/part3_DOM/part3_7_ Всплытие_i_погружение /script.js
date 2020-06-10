 let divs = document.querySelectorAll('div')
 for (let i = 0; i < divs.length; i++) { // добовляем цикл
     divs[i].addEventListener('click', function(){ // к каждому элементу добовляем события на клик и выводим его в консоль
         console.log(this.getAttribute('id'))//
     },true)//(false)) если  true то идет не погружение элиментов  а всплытие, если false то погружение
     //от верхнего в к нижниму
 }