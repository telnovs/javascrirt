console.log('Request data ....')

// setTimeout из сервкрного Api
//представим что делаем асинхронный запрос на сервер
//саздаем асинхонную функцию 
// setTimeout(() => {
// 	// типо делаем запрос сервера к базе данных
// 	console.log('Prepering data...')

// 	//как бы получем константу с сервера 
// 	const becekendData = {
// 		server: 'local',
// 		port: 3230 ,
// 		status: 'working'
// 	 }
// 	setTimeout(() => {
// 		becekendData.modifiad = true
// 		console.log('Data reseived',becekendData)
// 	},2000)  
// },2000)

// сделаем тоже самое только с Promise

// создаем промис
// промис создаеться при конструкции new Promise и туда передаем колбэк фунцию с 2мя параметрами  resolve и reject
// внутри функции мы пишим асинхронный код  
// Функция resolve (которая является аргументом конструктора) вызывается тогда, когда мы закончили асинхронную операцию.
const promis = new Promise (function(resolve, reject) {
	setTimeout( () => {
		console.log('Prepering data...')

		const becekendData = {
		server: 'local',
		port: 3230 ,
		status: 'working'
	 }
	 //что бы получить доступ becekendData в методе then ее необходимо предать в resolve
	 resolve (becekendData)// говорим нашему промесу что он завершил свое выполнение 
	},2000) 
})

// Вызываем метод then у промиса,в него передается колбэк и этот колбэк будет вызван тогда когда закончиться асинхронная операция 
//т.е будет вызван метод  resolve 
// получчаем как парметр becekendData
promis.then((data) => {
	// создаем еще один промис 
	return new Promise( (resolve, reject) =>{
		setTimeout(() => {
		data.modifiad = true
		resolve(data)
	},2000)  
  })
}).then(clientData => {
	console.log('Data received',clientData)
	clientData.fromPromise = true
	return clientData
}).then( data => {
	console.log('Modofine',data)
})
// метод catch выводит ошибки если они есть 
.catch(err => console.log('Errror: ', err))

//есть еще ментод finally он вызывается в лубом случаи 
.finally(( ) => console.log('Finally'))