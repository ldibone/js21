const obj = {
    name: 'Alex',
}

Object.defineProperty(obj, 'education', {
    value: 'higher',
    writable: false,
    enumerable: true,
    configurable: true,
})

obj.education = 'secondary'

console.log(obj)

//

const obj2 = {
    name: 'Alex',
}

Object.defineProperty(obj2, 'education', {
    value: 'higher',
    writable: true,
    enumerable: true,
    configurable: false,
})

Object.preventExtensions(obj2)

Object.prototype.city = 'Balti'
obj.city = 'Balti'

console.log(obj2)

//

const obj3 = {
    name: 'Alex',
}

Object.defineProperty(obj3, 'education', {
    value: 'higher',
    writable: true,
    enumerable: true,
    configurable: false,
})

Object.seal(obj3)

obj3.city = 'Balti'

obj3.name = 'Valeriu'

console.log(obj3)


//
const obj4 = {
    name: 'Alex',
}

Object.defineProperty(obj4, 'education', {
    value: 'higher',
    writable: true,
    enumerable: true,
    configurable: true,
})

Object.freeze(obj4)

obj4.city = 'Balti'

obj4.name = 'Valeriu'

console.log(obj4)

//

const arr1 = [1, 3, 7, 20, 9, 26]


console.log(arr1.sort((a, b) => a - b))

//

const arr2 = [1, 3, 7, 20, 9, 26]


console.log(arr2.sort((a, b) => b - a))

//

const arr3 = [
    {
        nume: 'Ion',
        age: '44'

    },
    {
        nume: 'Vasile',
        age: '35'
    }
]

console.log(arr3.sort((a, b) => {
    return a.age - b.age
}))

//

const arr4 = [
    {
        nume: 'Ion',
        age: '44'

    },
    {
        nume: 'Vasile',
        age: '35'
    }
]

console.log(arr4.sort((a, b) => {
    return b.age - a.age
}))

//
const obj5 = {
    a: 'a',
    b: 'b',
    c: {
        d: {
            y: 'y'
        }
    }
}

const obj6 = { ...obj5 }

obj6.c.d.y = 'c'

console.log('obj5', JSON.stringify(obj5))
console.log('obj6', obj6)

//
const obj7 = {
    a: 'a',
    b: 'b',
    c: {
        d: {
            y: 'y'
        }
    }
}

const obj8 = { ...obj7 }

obj6.c.d.y = 'c'

const testJSON = JSON.stringify(obj7)

console.log('obj7', JSON.parse(testJSON))
console.log('obj8', obj8)

//

const obj9 = {
    a: 'a',
    b: 'b',
    c: {
        d: {
            greet: () => console.log('hi'),
            y: 'y'
        }
    }
}

const deepClone = (obj9) => {
    let clone = {...obj9}
    Object.keys(clone).forEach((key) => {
        clone[key] = typeof clone[key]  === 'object' ? deepClone(obj9[key]) : obj9[key]
    })

    return clone;
}

const obj10 = deepClone(obj9)

obj10.c.d.y = 'x'

console.log('obj10', obj10)
console.log('obj9', obj9)
obj9.c.d.greet()
obj10.c.d.greet()

//

const arr5 = [1,2,3,4]

for (let item of arr5) {
    console.log(item)
}

//

const obj12 = {
    a: 'a',
    b: 'b',
    c: {
        d: {
            greet: () => console.log('hi'),
            y: 'y'
        }
    }
}

const deepClone2 = (obj12) => {
    let clone = {...obj12}
    for (let property in clone){
        clone[property] = typeof obj12[property]  === 'object' ? deepClone(obj12[property]) : obj12[property]
    }

    return clone;
}

const obj13 = deepClone(obj12)

obj13.c.d.y = 'x'

console.log('obj13', obj13)
console.log('obj12', obj12)
obj12.c.d.greet()
obj13.c.d.greet()


