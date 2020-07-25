// массив с обьектами
const people = [
  {  name: 'Vladilen',  age: 25, budget: 4000 },
  {  name: 'Elena',  age: 13 ,budget: 4100 },
  {  name: 'Victor', age: 23, budget: 4200 },
  {  name: 'Vasilisa', age: 25, budget: 4300 },
  {  name: 'Mark',  age: 26, budget: 4400 },
  {  name: 'Ivan', age: 15, budget: 44500 },
  {  name: 'Виктор',  age: 28, budget: 4600 }
]

// получем каждый обьект массива( делаем итерацию его) с помощью цикла for (ES5 синтаксис)
// for (let i =0; i <people.length; i++){
// 	console.log(people[i])
// }


// получем каждый обьект массива( делаем итерацию его) с помощью цикла for  (ES6 синтаксис)
// for (let person of people){
// 	console.log(person)
// }

/********************** forEach************************/

//forEach  приниает парамера 3 параметра это сам элемент, индекс и сам массив по которому делаем итерацию
// пример 1 (обычно используется только один параметр )
// people.forEach(function(person, index, pArr ){
// 	console.log(person)
// 	console.log(index)
// 	console.log(pArr)
// })

// с использованием только одного параметра и ES6 синтаксис 
// people.forEach(person => console.log(person));

/********************** map ************************/

// map так как и же forEach  приниает парамера 3 параметра это сам элемент, индекс и сам массив по которому делаем итерацию   
// с помощью map мы создаем новый массив 

// получение всего обьекта 
// const newPeople = people.map(person =>{
// 	return person;
// })

// получение только имен
// const newPeople = people.map(person =>{
// 	return person.name ;
// })

// другой вариант 
// const newPeople = people.map(person => `${person.name} (${person.age})`)

// еще пример 
// const newPeople = people.map(person => person.age * 3)

// console.log(newPeople);

/********************** filter ************************/

// фильтер с помощью  for

// const adults = []

// for (let i = 0; i < people.length; i++){
// 	if (people[i].age >= 18){
// 		adults.push(people[i])
// 	}
// }

// console.log(adults)

// тоже самое только filter

// const adults = people.filter(person => person.age >= 18)

// console.log(adults)


/********************** Reduce ************************/

// let amount = 0 

// for (let i = 0; i < people.length; i++){
// 	amount +=people[i].budget
// }


// const amount = people.reduce((total, person) => total + person.budget , 0)

// console.log(amount)





/********************* Find ************************/

// const Victor = people.find(person => person.name === 'Victor')

// console.log(Victor)



/********************* findIndex ************************/



// const Victorindex = people.findIndex(person => person.name === 'Victor')

// console.log(Victorindex)

/******************************* Пример *************************************/

const amount = people
	.filter(person =>person.budget >2000)
	.map(person =>{
		return{
			info: `${person.name}  ($){person.age})`,
			budget: person.budget
		}
	})
	.reduce((total, person) => total + person.budget, 0)


console.log(amount)