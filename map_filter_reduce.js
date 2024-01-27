// // const input=[1,2,3,4,5]

// // function multiply(input,multiplier){
// //     for(let i=0;i<input.length;i++){
// //         input[i]=input[i]*multiplier
// //     }
// // }
// // multiply(input, 3)
// // console.log(input)

// const users = [
//   { id: 1, name: 'John', age: 25, gender: 'Male' },
//   { id: 2, name: 'Jane', age: 30, gender: 'Female' },
//   { id: 3, name: 'Bob', age: 22, gender: 'Male' },
//   { id: 4, name: 'Alice', age: 28, gender: 'Female' },
//   { id: 5, name: 'Charlie', age: 35, gender: 'Male' },
//   { id: 6, name: 'Eva', age: 27, gender: 'Female' }
// ];

// const products = [
//   { id: 101, name: 'Laptop', price: 1200, category: 'Electronics' },
//   { id: 102, name: 'Chair', price: 50, category: 'Furniture' },
//   { id: 103, name: 'Bookshelf', price: 200, category: 'Furniture' },
//   { id: 104, name: 'Smartphone', price: 800, category: 'Electronics' },
//   { id: 105, name: 'Coffee Table', price: 100, category: 'Furniture' },
//   { id: 106, name: 'Headphones', price: 80, category: 'Electronics' }
// ];

// const items = products.filter((device) => device.category === "Electronics")
//   // console.log(items)

// const details = users.filter((person) => { return person.gender === "Male" })  //use 'return' when using {} in callback,coz it opens a new scope 
//   // console.log(details)

// // const details2=users.forEach((person)=>{
// //     if(person.gender==="Male")
// //     return person;
// // })

// // console.log(details2) //it will return undefined ,coz forEach doesn't return anything 


// const details3 = []
// users.forEach((person) => {
//   if (person.age >= 30)
//     details3.push(person)
// })
// // console.log(details3) 


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //map:creates a new array , by applying a given function to each element of the existing array, it doesn't modify the original array

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArray = myArray.map((elem) => elem * 10)
// // console.log(newArray)

// //chaining map function:

// const anotherArray = myArray
//   .map((elem) => elem * 10)
//   .map((elem) => elem + 1)           //this elem will have the result  of above map function
//   .filter((elem) => elem > 50)        // filter out the returned values from above map that are greater then 50
// // console.log(anotherArray)


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //reduce: it is a higher order function it iterates over the elements of array and returns a single value by applying the callback function;

// //sum of all the elements in the array

// // const numbers=[1,2,3,4,5]

// // const sumOfElements=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
// // console.log(sumOfElements)


// //shopping cart total amount:

// const shoppingCart = [
//   { id: 1, name: 'Laptop', quantity: 2, price: 1200 },
//   { id: 2, name: 'Mouse', quantity: 3, price: 20 },
//   { id: 3, name: 'Chair', quantity: 1, price: 50 },
//   { id: 4, name: 'Headphones', quantity: 2, price: 80 },
//   { id: 5, name: 'Desk', quantity: 1, price: 150 }
// ];

// const totalAmount=shoppingCart.reduce((acc,currVal)=>acc+currVal.price,0)
// // console.log(totalAmount);


const products = [
  { id: 101, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 102, name: 'Chair', price: 50, category: 'Furniture' },
  { id: 103, name: 'Bookshelf', price: 200, category: 'Furniture' },
  { id: 104, name: 'Smartphone', price: 800, category: 'Electronics' },
  { id: 105, name: 'Coffee Table', price: 100, category: 'Furniture' },
  { id: 106, name: 'Headphones', price: 80, category: 'Electronics' }
];

const items = products.filter((device) => device.category ==="grocery")
  console.log(items)