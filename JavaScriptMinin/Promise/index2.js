// создаем метод sleep
// ms - это милисекунды 
const sleep = ms =>{
	return new Promise(resolve => {
		setTimeout (() => resolve(),ms)
	}) 
} 

sleep(10000).then(() => console.log('Hello 12 sec'))
sleep(12000).then(() => console.log('Hello 14 sec'))


// метод  all  промиса принимает массив промисов и выполняеться после того как завершаться все промисы в массиве 

Promise.all([sleep(2000), sleep(5000)])
	.then(() => {
		console.log('Promise all')
	})


// метод  race промиса принимает массив промисов и выполняеться после того как завершаться первый промис в массиве 
	Promise.race([sleep(2000), sleep(5000)])
	.then(() => {
		console.log('Promise raec')
	})