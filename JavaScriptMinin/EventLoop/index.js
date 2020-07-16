
    console.log('Start')

	console.log('Start2')

	/*

		создаем асинхронную функцию setTimeout первым параметром передается функция
		вторым параметром время, через какое выполниться функция первого парметра  
	*/

	window.setTimeout(function(){
		console.log('Hello function 2000')
	},2000)

	 console.log('end')


	 function timeout5sec () {
	 	console.log('timeout5sec ')
	 } 

	setTimeout(timeout5sec
	,5000)
