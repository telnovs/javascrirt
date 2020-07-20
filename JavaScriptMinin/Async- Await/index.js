//создаем новый промис 
// принимает мили секнды
const delay = ms =>{
	// возвращает промис в конструктор которого передаем функцию  resolve
	// далее в setTimeout задаем зареджку
	return new Promise (resolve => setTimeout( ()  => resolve(),ms))
}

//скопировали адрес на JSONPlaceholder в строке Example
const url = 'https://jsonplaceholder.typicode.com/todos'

// // создаем фунцию 
// function fetchTodos() {
// 	console.log('Fetch todo started...')
// 	// создаем искуственную задержку 
// 	return delay(2000)
// 		.then( () => {
// 		// делаем запрос на сервер 
// 	return	fetch(url)
// 		// парсим респонс
// 	}).then(response => response.json())

// }

// // вызываем метод fetchTodos
// fetchTodos() 
// 	.then(data => {
// 		console.log('Data :',data)
// 	})
// // обрабатываем ошибку методоm catch
// 	.catch(e => console.error(e))


/**************************  ТОже самое только с Async и Await *******************/

// если мы хотим работать а асинхронным кодом в новом формате, то нам необъходимо сделать 
//  function асинхронной дописать async
async function fetchTodos() {
	console.log('Fetch todo started...')
	// оборачиваем в try catch
	try {
	// если дописать await то это равносильно тому что мы обрабатываем промис 
	await delay(2000)
	// следующей строчкой мы можем выполнять какую то логику 
	// и мы не передем к этой строчки пока не зваершиться промис выше

	//как результат работы aw ait и fetch заносим в переменную response
	const response = await fetch(url)

	const data = await response.json() 

	console.log('Data :',data)
}catch(e) {// обработчик ошибок
	console.error(e)
}
}


fetchTodos()
















