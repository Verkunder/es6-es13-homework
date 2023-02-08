const includesArray = ['Irishman', 'krinzhevald', 'Frenchman', 'GOD']

console.log('====================================')
console.log(includesArray.includes('GOD'))
console.log('====================================')

const entriesObject = {
	name: 'Stepan',
	nationality: 'Irishman',
}

for (const [key, value] of Object.entries(entriesObject)) {
	console.log(`${key}: ${value}`)
}

const valuesObject = {
	name: 'Alexandre',
	profession: 'Maître de mise en page nu',
	age: 'Éternel',
}

console.log('====================================')
console.log(Object.values(valuesObject))
console.log('====================================')

const fromEntries = [
	['senioro', 'pomidoro'],
	['graf', 'verstka'],
]

const objectToArray = Object.fromEntries(fromEntries)

console.log(objectToArray)

const ownPropertyDescriptors = {
	property: 357,
}

const descriptor = Object.getOwnPropertyDescriptors(ownPropertyDescriptors)

console.log(descriptor.property)

// configurable - true тогда и только тогда, когда тип дескриптора этого свойства может быть изменен и если свойство может быть удалено из соответствующего объекта.

// enumerable - true тогда и только тогда, когда это свойство появляется во время перечисления свойств соответствующего объекта.

console.log(Object.hasOwn(ownPropertyDescriptors, 'property'))

const hello = 'world!'.padStart(12, 'Hello ')

console.log(hello)

const world = 'Hello'.padEnd(12, ' world!')

console.log(world)

const trimStart = '         test trim start'

console.log(trimStart.trimStart())

const trimEnd = 'test trim end                '

console.log(trimEnd.trimEnd())

const asyncAwait = async () => {
	try {
		const request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		const response = await request.json()
		console.log(response)
	} catch (e) {
		console.warn(e)
	}
}
// Добавление свойства
const user = { id: 100, name: 'Howard Moon' }
const userWithPass = { ...user, password: 'Password!' }

// удаление
const noPassword = ({ password, ...rest }) => rest
const user1 = {
	id: 100,
	name: 'Howard Moon',
	password: 'Password!',
}

noPassword(user1)

const { name, ...rest } = user

console.log(name)

const finallyPromise = () => {
	return new Promise((resolve, reject) => {
		Math.random() > 0.5 ? resolve('Oh my God') : reject('Not God')
	})
}

finallyPromise()
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('eeeeeeeee'))

const asyncArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const asyncArrayFunction = async () => {
	for await (let num of asyncArray) {
		console.log(num)
	}
}

asyncArrayFunction()
