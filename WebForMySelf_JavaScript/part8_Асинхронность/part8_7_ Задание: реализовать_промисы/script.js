//Реализуйте класс MyPromise, который будет работать точно так же, как и Promise.
// Достаточно реализовать методы: then, catch, finally
// Методы all, race делать не нужно

//обычный Promise
//     const promise = new Promise ((resolve,reject)=>{
//         setTimeout(()=> {
//             resolve(2)
//         },2000)
//     })
//     promise
//         .then(nun => nun *=2)
//         .catch(err => console.log('err'))
//         .then(nun => nun *=3)
//         .finally(() => console.log('finally'))


// Создаем свой промис(Promise это  класс), поэтому нам нужно создать класс
// в конструктор данного класса мы передаем функцию, которая принимает в себя 2 параметра
 class MyPromise{
    //передаем контсруктор колбэк
     constructor(callback){
         // приватные переменнаые для методов
         this.oncatch = null
         this.onfinally = null
         //для метода then мы создаем массив
         this.onthen = []
         // для обработки событий
         this.isRejected = false

         //callbeck вызываеться сразу как будет обьявлен
         // данный колбэк принимает в себя функции resolve,reject
         // поэтому их необходимо создать

         //передаем данные
         function resolver(data){
             // поверка  на ошибки
             if(this.isRejected){
                 return
             }
             // проходимся по массиву Onthen с помощью метода forEach
             this.onthen.forEach(cd =>{
                 // резапись данных
                data = cd(data)
             })

             if (this.onfinally){
                 this.onfinally()
             }
         }
         // передаем ошибку
         //
         function rejecter(error){
         // когда мы вызываем метод reject мы создаем ошибку которая должна попасть в метод catch
         // делаем проверку. если у нас есть Oncatch присутствует
             this.isRejected = true
             if (this.oncatch){
              // тогда вызываем метод Oncatch с ошибкой
                 this.oncatch(error)
             }
             // так же делаем и для finally
             if (this.onfinally){
                 this.onfinally()
             }
         }
        //привязываем  контекст с помощью метода bind
        callback(resolver.bind(this),rejecter.bind(this))
     }
     //нам необходимо еще создать 3 методавсе они примимают колбэк функции
     // эти методы должны содержать не логику по трансформации данных, а запоминать какие
     //какие колбэки в них передаться  и просто вызывать их в нужный момент

     // метод  может вызываться бесконечное количество раз
     // сохраняем данный колбэк с помощью push
     then(cd){
        this.onthen.push(cd)
         // строчка для того что бы продолжела работат цепочка методов
         return this
     }
     // метод catch и finally мы можем вызвать только один раз
     //по этому можно записать колбэки в переменные и вызывть в нужный момент
     catch(cd) {
        this.oncatch = cd
         return this
     }
     finally(cd){
         this.onfinally = cd
         return this
     }
 }


 // Проверяем как работает класс MyPromise
const promise = new MyPromise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve(2)
        },2000)
    })
    promise
        .then(num => num *=2)
        .catch(err => console.log('err'))
        .then(num => num *=3)
        .finally(() => console.log('finally'))
        .then( num => console.log('Dane!', num ))