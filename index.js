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

console.log(noPassword(user1))

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

const arrayNoFlatMap = [1, 2, [3], [4, 5, [3, 4, [6]]], 6, []]

const flattenArray = arrayNoFlatMap.flatMap(item => item)

console.log('====================================')
console.log({ flattenArray })
console.log('====================================')

console.log(arrayNoFlatMap.flat())

console.log('====================================')
console.log(arrayNoFlatMap.flat(3))
console.log('====================================')

class LaFrize {
	name = '123'
}

const sum = (a, b) => {
	return a + b
}

console.log('====================================')
console.log(sum.toString())
console.log('====================================')

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

months.sort()

console.log('====================================')
console.log(months)
console.log('====================================')

const canMakeHTTPRequest = () => {
	return typeof globalThis.XMLHttpRequest === 'function'
}

console.log(canMakeHTTPRequest())

const { hi } = await import('./console.js')

hi()

const symbol = Symbol('Hello')
const name1 = Symbol('Hello')

console.log(symbol === name1)

class ClassWithPrivateStaticField {
	static #PRIVATE_STATIC_FIELD

	static publicStaticMethod() {
		ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
		return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
	}
}

console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42)

const array1 = [5, 12, 50, 130, 44]

const isLargeNumber = element => element > 45

console.log(array1.findLastIndex(isLargeNumber))
// идет с конца

const found = array1.findLast(element => element > 45)

console.log(found)
// идет с конца и возвращает значение

class IncreasingCounter {
	#count = 0
	приватное
	_count = 0
	публичное
	static PI = 22 / 7
	get value() {
		console.log('Getting the current value!')
		return this.#count
	}
	increment() {
		this.#count++
	}
}

class Animal {
	constructor(name) {
		this.name = name
	}
}

// class Cat extends Animal {
// 	constructor(name) {
// 		super(name)
// 		this.likesBaths = false
// 	}
// 	meow() {
// 		console.log('Meow!')
// 	}
// }

// Старый синтаксис, теперь не нужно вызывать конструктор и обращаться в супер

class Cat extends Animal {
	likesBaths = false
	meow() {
		console.log('Meow!')
	}
}

const atArray = [5, 7, 8, 2, 1, 75, 25]

console.log('atArray', atArray.at(6))
// принимает индекс, возвращает число
