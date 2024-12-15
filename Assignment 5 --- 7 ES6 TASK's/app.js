// Asssignment 5
// ES6 Tasks

// ===== Task 1 =====

// var t1 = "Hello";
// let t11 = "World";
// const t111 = 123;

// console.log(t1,t11,t111);
// They are accesible Globally

// ===== Task 2 =====

// function abc(){
//     var t2 = "Hello";
//     let t22 = "World";
//     const t222 = 123;
// }

// console.log(t2);
// console.log(t22);
// console.log(t222);

// Error occured t2 , t22 , t222  are not defined

// ===== Task 3 =====

// if(true == 1){
//     var t3 = "Hello";
//     let t33 = "World";
//     const t333 = 123;
// }

// console.log(t3);
// console.log(t33);
// console.log(t333);

// Only variable declared with VAR was shown on console and for the rest Error Not Defined.

// ===== Task 4 =====

// console.log(t4);

// var t4 = "Hello World!"

// Undefined

// ===== Task 5 =====

// console.log(t5);
// console.log(t55);

// let t5 = "World"
// const t55 = 123;

// Canoot access t5 and t55 before initialization

// ===== Task 6 =====

// var t6 = "hello"
// var t6 = "hello"

// let t66 = "World";
// let t66 = "World";

// const t666 = 123;
// const t666 = 123;

// Runtime Eror Ocuured for let and const but not for var

// ===== Task 7 =====

// var t7 = "Hello";
// t7 = "WoW";

// let t77 = "WoW"
// t77 = "Hello";

// const t777 = 123;
// t777 = 555;

// console.log(t7,t77,t777);

// We can reassign to var and let but not to const

// ===== Task 8 =====

// {
//     console.log(t8,t88);

//     let t8 = "hello"
//     const t88 = "world"
// }

// Cannot acces t8 and t88 before Initialization --- Let and Const do not HOIST

// ===== Taks 9 =====

// var grade = 12;
// let age = 17;
// const name = "Hassaan Ahmed khan";

// My name is constant but age and grade are variables

// ===== Task 10 =====

// let f_Name = "Hassaan Ahmed";
// let l_Name = "Khan";
// console.log(`${f_Name} ${l_Name}`);

// ===== Task 11 =====

// let add = "Flat # 123, Al-Azam Square, Phase 999, F.B. Area Block 00"

// console.log(`${add}\nKARACHI`);

// ===== Task 12 =====

// let t12 = 123;
// let t122 = 77;

// console.log(`${t12+t122}`);

// ===== Task 13 =====

// let prod = (a,b)=>{
//     return a*b;
// }

// console.log(`${prod(3,3)}`);

// ===== Task 14 =====

// let tagged = (str)=>{
// str.map((e,i)=>console.log(e))
// }

// tagged`Hello World`;

// ===== Task 15 =====

// let tagged = (str)=>{
// str.map((e,i)=>console.log(e.toUpperCase()))
// }

// tagged`hassaan ahmed khan`

// ===== Task 16 =====

// let dated = new Date();
// let hour = dated.getHours();

// let check = `${hour >= 12 ? "AfterNoon" : "Morning"}`;

// console.log(check);

// ===== Task 17 =====

// let arr = ["Aloo","Pyaz","Timatar",];

// let lister = arr.map((e,i)=>{
//     console.log(`${e}`);
//     document.write(`<ul><li>${e}</li></ul>`);
// })

// ===== Task 18 =====

// let backTick = `${"``"} This is Back Tick`;

// console.log(backTick);

// ===== Task 19 =====

// let nest4 = `<td>Text</td>`
// let nest3 = `<th>Heading<th>`
// let nest2 = `<tr>${nest3}</tr>`
// let nest21 = `<tr>${nest4}</tr>`
// let nest1 = `<table>${nest2}${nest21}</table>`

// console.log(nest1);

// document.write(nest1);

// ===== Task 20 =====

// let age = 17;

// let canVote = age >= 18 ? "Yes" : "No";

// console.log(canVote);

// ===== Task 21 =====

// let num = 16;

// let evenOrOdd = (num%2) == 0 ? "Even" : "Odd";

// console.log(evenOrOdd);

// ===== Task 22 =====

// let score = 90;

// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";

// console.log(grade);

// ===== Task 23 =====

// let isLoggedIn = true;

// let statusMessage = isLoggedIn == true ? "Welcome Back" : "Please Login";

// console.log(statusMessage);

// ===== Task 24 =====

// let isMember = true;
// let purchaseAmount = 200;

// let discount = (isMember == true && purchaseAmount > 100) ? +((0.10*purchaseAmount).toFixed(2)) : 0;

// console.log(discount);

// ===== Task 25 =====

// let maxValue = (a,b)=>{
//     return (a !== b ? a > b ? a : b : `${a} and ${b} are equal`);
// }

// console.log(maxValue(30,20));

// ===== Task 26 =====

// let greet = (name)=>{
//     return(name !== "" && name !== undefined ? `Hello ${name}` : `Hello Guest`)
// }

// console.log(greet("Hassaan"));
// console.log(greet());


// ===== Task 27 =====

// let nums = [1,2,3,4,5,6];

// let mapping = nums.map((e,i)=>{
//     return (e%2 == 0 ? e*2 : e*3);
// })

// console.log(mapping);

// ===== Task 28 =====

// let strArr = ["Hello","WOW","Blue","Red","Nice","TRUE","two","oo"];

// let filter_strArr = strArr.filter((e,i)=>{
//     return (e.length > 3 ? e :"");
// })

// console.log(filter_strArr);

// ===== Task 29 =====

// let originalArray = [1,"Hello","WOW",true,17];

// let copiedArray = [...originalArray];
// copiedArray.push("Hassaan")

// console.log(originalArray);
// console.log(copiedArray);

// ===== Task 30 =====

// let array1 = [1,2,3];
// let array2 = [4,5,6];

// let mergedArray = [...array1, ...array2];

// console.log(mergedArray);

// ===== Task 31 =====

// let numbers = [2,3,4];

// numbers = [1,...numbers,5];

// console.log(numbers);

// ===== Task 32 =====

// let originalObject = {
//     name: "Hassaan",
//     age: 17,
//     grade: 12,
// }

// let copiedObject = {...originalObject}
// copiedObject.school = "Nasra";

// console.log(originalObject);
// console.log(copiedObject);

// ===== Task 33 =====

// let object1 = {
//     name: "Hassaan",
//     age: 17,
//     grade: 12,
// }

// let object2 = {
//     name: "Ahmed",
//     age: 10,
//     school: "Nasra",
// }

// let mergedObject = {...object1,...object2};

// console.log(mergedObject);

// The values of object2 are retained by the mergedObject for the overlapping keys of same value


// ===== Task 34 =====

// let user = {
//     name: "Hassaan Ahmed Khan",
//     age: 17,
//     email: "hassaanahmed13k@gmail.com"
// }

// let updatedUser = {...user};
// updatedUser.email = "hassaanahmedweb@gmail.com"
// updatedUser.address = "Flat # 123, Al-Azam Square, Phase 999, F.B. Area Block 00";

// console.log(updatedUser);

// ===== Task 35 =====

// let sum = (a,b,c)=>{
//     return a+b+c;
// }

// let numbers1 = [10,20,30];

// console.log(sum(...numbers1));

// ===== Task 36 =====

// let combineArrays = (a,b,c,d)=>{
//     return [...a,...b,...c,...d]
// }

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]
// let arr4 = [10,11,12]

// console.log(combineArrays(arr1,arr2,arr3,arr4));

// ===== Task 37 =====

// let multiply = (x,...rest)=>{
//     return (rest.map((e,i)=>e*x))
// }

// console.log(multiply(10,1,2,3,4,5,6,7,8,9,10));

// ===== Task 38 =====

// let nestedArray = [["Hello",123],["World",456]];

// let copy1 = [...nestedArray[0]];
// copy1.pop()
// copy1.pop()
// copy1.push("World")
// copy1.push(456)
// let copy2 = [...nestedArray[1]];
// copy2.pop()
// copy2.pop()
// copy2.push("Hello")
// copy2.push(123)

// let copy = [...copy1,...copy2]
// console.log(copy);
// console.log(nestedArray);


// ===== Task 39 =====

// let sum = (...rest)=>{
//     return(rest.reduce((a,b)=>{
//         return a+b;
//     },10))
// }

// console.log(sum(10,20,30,40,50,60));

// console.log(sum(10,20,30,40));

// console.log(sum());

// ===== Task 40 =====

// let average = (...rest)=>{
// return((rest.reduce((a,b)=>{
//     return a+b;
// }))/rest.length)
// }

// console.log(average(10,20,30,40,50));
// console.log(average(10,20,30));
// console.log(average(10,20));

// ===== Task 41 =====

// let numbers2 = [2,4,6,8,10];

// let [first,...rest] = numbers2;

// console.log(first);
// console.log(rest);

// ===== Task 42 =====

// let colors = ["Red","Blue","Green","Indigo","White"];


// let [,,...remainingColors] = colors;

// console.log(remainingColors);

// ===== Task 43 =====

// let objPerson = {
//     name: "Hassaan",
//     email: "hassaanahmed13k@gmail.com",
//     age: 17,
//     address: "Dummy Address",
// }

// let {name,email,...rest} = objPerson;

// console.log(name,email,rest);

// ===== Task 44 =====

// let student = {
//     name: "Hassaan",
//     id: 123456,
//     grades: "A1",
//     info: {
//         age: 17,
//         major: "WOW",
//     },
// }

// let {name,id,info,...rest} = student;
// let {age,major} = info;
// rest.age = age;
// console.log(name,id,major,rest);

// ===== Task 45 =====

// let filterEven = (...rest) => {
//     return (rest.filter((e,i) => e%2 === 0))
// }

// console.log(filterEven(1,2,3,4,5,6,7,8,9));
// console.log(filterEven(13,112,53,34,55,665,77,78,));

// ===== Task 46 =====

// let combineAndSort = (...rest)=>{
//     return rest.reduce((a,b)=>{   
//    return a = [...a,...b];
//    or
// return [...a,...b];

//     })
// }
// console.log(combineAndSort([1,2,3,4,5],["Hassaan","Ahmed","Khan"],[true,false]));
// console.log(combineAndSort([1,2,3,4,5],["Hassaan","Ahmed","Khan"]));
// console.log(combineAndSort(["Hassaan","Ahmed","Khan"],[null,undefined,true,false]));
// console.log(combineAndSort([1,2,3,4,5],[null,undefined,true,false]));

// ===== Task 47 =====

// let fruits = ['apple','banana','cherry'];

// let [firstFruit,secondFruit,thirdFruit] = fruits;

// console.log(firstFruit,secondFruit,thirdFruit);

// ===== Task 48 =====

// let colors = ["red","blue","green"];

// let [primaryColor,,tertiaryColor] = colors;

// console.log(primaryColor,tertiaryColor);

// ===== Task 49 =====

// let numbers = [1,2,3,4,5];

// let [firstNumber,...remainingNumbers] = numbers;

// console.log(firstNumber,remainingNumbers);

// ===== Task 50 =====

// let person = {
//     name: "Hassaan Ahmed khan",
//     age: 17,
//     city: "Karachi",
// }

// let {name,age,city} = person;

// console.log(name,age,city);

// ===== Task 51 =====

// let car = {
//     make: "2017",
//     model: "10",
//     year: "2015"
// }


// let {make,model,year} = car;

// let carMake = make;
// let carModel = model;
// let carYear = year;

// console.log(carMake,carModel,carYear);

// ===== Task 52 =====

// let settings = {
//     theme: "Dark",
//     language: "",
// }

// let {theme,language} = settings;
// language = "english";
// console.log(theme,language);

// ===== Task 53 =====

// let nestedArray = [[1,2],[3,4],[5,6]];

// let [[a],[b],[c]] = nestedArray;

// console.log(a,b,c);

// ===== Task 54 =====

// let profile = {
//     userName: "Hassaan",
//     details: {
//         email: "hassaanahmed13k@gmail.com",
//         address: "Dummy Address"
//     }
// }

// let {userName,details:{email,address}} = profile;

// console.log(userName,email,address);

// ===== Task 55 =====

// let data = {
//     id: 12345,
//     info: [{name: "Alice"},{age: 25}]
// }

// let {id,info:[first,second]} = data;

// console.log(first.name,second.age);


// ===== Task 56 ====

// let printCoordinates = ([x,y])=>{
//     console.log(x,y);
// }

// printCoordinates([20,50]);
// printCoordinates([-6,5]);
// printCoordinates([10,5]);

// ===== Task 57 =====

// let displayUser = ({name,age})=>{
//     console.log(name,age);
// }
// displayUser({name: "Hassaan",age: "17"});
// displayUser({name: "Ahmed",age: "27"});
// displayUser({name: "Khan",age: "37"});

// ===== Task 58 =====

// let book = {
//     title: "The Prisoner Of Zenda",
//     author: "Anthony Hope",
//     year: 1894,
// }

// console.log(Object.keys(book));

// ==== Task 59 =====

// let student = {
//     name: "Hassaan",
//     age: 17,
//     grade: 12,
//     school: "Nasra",
// }

// console.log((Object.keys(student)).length);

// ===== Task 60 =====

// let iterate = () => {
//     let product = {
//         name: "Potato",
//         price: "Rs.80/KG",
//         category: "Vegetables",
//     }

//     let productKeys = Object.keys(product)

//     return(productKeys.map((e,i)=>{
//         console.log(`${e}: ${product[e]}`);
//     }))
// }

// iterate();

// ===== Task 61 =====

// let movie = {
//     title: "The Movie",
//     director: "Anonymous",
//     year: 1997,
//     genre: "Action"
// }

// console.log(Object.values(movie));

// ===== Task 62 =====

// let scores = {
//     math: 98,
//     science: 95,
//     english: 89,
// }

// let arr = Object.values(scores)

// let sum = arr.reduce((a,b)=>{
//     return a+b;
// })

// console.log(sum);

// ===== Task 63 =====

// let user = {
//     usrName: "Hassaan",
//     email: "hassaanahmed13k@gmail.com",
//     location: "Karachi",
// }

// let valueUser = Object.values(user);

// valueUser.map((e,i)=>{
//     console.log(e);
// })

// ===== Task 64 =====

// let car = {
//     make: 2017,
//     model: 10,
//     year: 2015,
// }

// console.log(Object.entries(car));

// ===== Task 65 =====

// let person = {
//     firstName: "Hassaan Ahmed",
//     lastName: "khan",
//     age: 17,
// }

// console.log(Object.entries(person));

// ===== Task 66 =====

// let settings = {
//     theme: "Dark",
//     notifications: null,
//     privacy: "Protected",
// }

// let pairs = Object.entries(settings);

// let solved = pairs.map((e,i)=>{
//     e.reduce((c,d)=>{
//         console.log(c,d);
//     })
// })

// ===== Task 67 =====

// let inventory = {
//     apples: 18,
//     bananas: 12,
//     oranges: 8,
//     grapes: 3,
// }

// let inventoryKeys = Object.keys(inventory);

// let check = inventoryKeys.filter((e,i)=>{
//     return inventory[e] > 10;
// })

// console.log(check);

// ===== Task 68 =====

// let temperatures = {
//     morning: 10,
//     afternoon: 17,
//     evening: 12,
// }

// let pairs = Object.entries(temperatures);

// let converted = pairs.map((e,i)=>{
//     return (e.filter((a,b)=>{
//         return typeof(a) === "number"; 
//         }))
// })

// convertedTemperature = {
//     // morning:,
//     // afternoon:,
//     // evening:,
// }

// convertedTemperature.morning = ((converted[0][0]* (9/5)) + 32)
// convertedTemperature.afernoon = ((converted[1][0]* (9/5)) + 32)
// convertedTemperature.evening = ((converted[2][0]* (9/5)) + 32)

// console.log(convertedTemperature);

// ===== Task 69 =====

// let roles = {
//     admin: "Hassaan",
//     editor: "Ahmed",
//     viewer: "Khan",
// }

// let pairsRoles = Object.entries(roles);

// let values =  pairsRoles.map((e,i)=>{
//     return e.pop();
// })

// let keys =  pairsRoles.map((e,i)=>{
//     return e.shift();
// })

// roles = {}   

// for (let i = 0; i < keys.length; i++) {
//     roles[values[i]] = keys[i];
// }

// console.log(roles);

// ===== Task 70 =====

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let filterAndMap = (arr,filters,maps)=>{
// console.log(filters);
// console.log(maps);
// }
// let filters = numbers.filter((e,i)=>{
//     return e%2 == 0;
// })

// let filter2 = numbers.filter((e,i)=>{
//     return e%2 !== 0;
// })

// let maps = filter2.map((e,i)=>{
//     return e*e;
// })

// filterAndMap(numbers,filters,maps)

// ===== Task 71 =====

// let words =[ "banana", "cherry", "apple", "date"];

// let sortAndReduce = (arr,sorted,concat) => {
// console.log(arr,sorted,concat);
// }

// let sorts = words.toSorted()

// let sum = sorts.reduce((a,b)=>{
//     return a+b;
// })

// sortAndReduce(words,sorts,sum)

// ===== Task 72 =====

// let greet = (name,message) => {
// console.log(`${message()} ${name}`);
// }

// let printGreeting = () => {
//     return "Welcome Back";
// }

// greet("Hassaan",printGreeting)

// ===== Task 73 =====

// let fetchData = (data)=>{
//     data()
// }

// let displayData = () => {
//      console.log("This is delayed data");
// }

// setTimeout(()=> fetchData(displayData),2000)

// ===== Task 74 =====

// let add = (a,b) => {
//     return a + b;
// }

// console.log(add(3,5));

// ===== Task 75 =====

// let numbers = [1,2,3,4,5];

// let square = () => {
//     return (numbers.map((e,i)=>{
//         return e*e;
//     }))
// }

// console.log(square());

// ===== Task 76 =====

// let outer = () => {
//     let x = "Hello";
//     let inner = () => {
//         console.log(x);
//     }
//     inner()
// }

// outer()

// ===== Task 77 =====

// let createCounter = () => {
//     let counter = 10;
//     return ()=>{
//         counter++;
//         console.log(counter);
//     }
// }

// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1()
// counter2()
// counter1()
// counter2()
// counter1()
// counter2()

// ===== Task 78 =====

// let greet = (name,message="Hello")=>{
// console.log(`${message} ${name}`);
// }

// greet("Hassaan")
// greet("Hassaan","Welcome")

// ===== Task 79 =====

// let calculateArea = (width=10,height=5)=>{
//     return `${width*height} sq. units`;
// }

// console.log(calculateArea());
// console.log(calculateArea(30,20));

// ===== Task 80 =====

// let numbers = [1,2,3,4,5];

// let square = numbers.map((e,i)=>{
//     return e*e;
// })

// console.log(square);

// ===== Task 81 =====

// let words = ["apple", "banana", "cherry"];

// let capital = words.map((e,i)=>{
//     return (e.toUpperCase());
// })

// console.log(capital);

// ===== Task 82 =====

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filterEven = numbers.filter((e,i)=>{
//     return e%2 == 0;
// })

// console.log(filterEven);

// ===== Task 83 =====

// let words = ["apple", "banana","cherry", "date"];

// let long = words.filter((e,i)=>{
//     return e.length > 5;
// })

// console.log(long);

// ===== Task 84 =====

// let numbers = [1,2,3,4,5];

// numbers.forEach((e,i)=>{
//     console.log(e);
// })

// ===== Task 85 =====

// let words = ["apple", "banana", "cherry"];

// words.filter((e,i)=>{
//     console.log(e.length);
// })

// ===== Task 86 =====

// let numbers = [1,2,3,4,5];

// let sum = numbers.reduce((a,b)=>{
//     return a+b;
// })

// console.log(sum);

// ===== Task 87 =====

// let words = ["Hello", "world", "this", "is", "JavaScript"];

// let concat = words.reduce((a,b)=>{
//     return `${a +" "+b}`
// })

// console.log(concat);

// ===== Task 88 =====

// let numbers = [1, 3, 5, 7, 8]

// let even = numbers.some((e,i)=>{
//     return e%2 == 0;
// })

// console.log(even);

// ===== Task 89 =====

// let words = ["apple", "banana", "cherry", "date"];

// let long = words.some((e,i)=>{
//     return e.length > 5;
// })

// console.log(long);

// ===== Task 90 =====

// let numbers = [2,4,6,8,10];

// let all = numbers.every((e,i)=>{
//     return e%2 == 0;
// })

// console.log(all);

// ===== Task 91 =====

// let words = ["elephant", "giraffe", "hippopotamus"];

// let all = words.every((e,i)=>{
//     return e.length > 5;
// })

// console.log(all);

// ===== Task 92 =====

// let numbers = [1, 3, 5, 7, 8];

// let finding = numbers.find((e,i)=>{
//     return e%2 == 0;
// })

// console.log(finding);

// ===== Task 93 =====

// let words = ["apple", "banana", "cherry", "date"];

// let finding = words.find((e,i)=>{
//     return e.length > 5;
// })

// console.log(finding);

// ===== Task 94 =====

// let numbers = [1, 3, 5, 7, 8];

// let findingIndex = numbers.findIndex((e,i)=>{
//     return e%2 == 0;
// })

// console.log(findingIndex);

// ===== Task 95 =====

// let words = ["apple", "banana", "cherry", "date"];

// let findingIndex = words.findIndex((e,i)=>{
//     return e.length > 5;
// })

// console.log(findingIndex);

// ===== Task 96 =====

// let delay = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true == 1){
//             resolve("Hello World");
//         }
//         else{
//             reject('Rejected')
//         }
//     }, 2000); 
// })

// delay.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// ===== Task 97 =====

// let fetchData = ()=>{
//     return(new Promise((resolve, reject) => {
//         if(true == 1){
//             resolve({name:"Hassaan",age:17});
//         }
//         else{
//             reject('Rejected')
//         }
//     }))
// }

// fetchData().then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// ===== Task 98 =====

// let fetchUserData = ()=>{
//     return(new Promise((resolve, reject) => {
//         let obj = {name:"Hassaan"}
//         if(obj.age){
//             resolve(obj);
//         }
//         else{
//             reject('Age is not present in object');
//         }
//     }))
// }

// fetchUserData().then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// ===== Task 99 ===== 

// Here the error is spelling of karachi (Karach)

// let getWeather = () => {
//     return(new Promise((resolve, reject) => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karach&appid=b19a397422c7e5a010aa3f281677027e&units=metric`).then((response)=>{
//         console.log(response);
//             if(!(response.ok)){
//                     resolve ((response.json()).then((datas)=> {return datas.message}));
//                 }
//                 else{
//                     resolve (response.json())
//                 }
//             })
//     }))
// }


// getWeather().then((data)=>{
//     console.log(data);
// })

// ===== Task 100 =====

// let sayHello = async () => {
//     await (delay.then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     }))
// }

// let delay = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true == 1){
//             resolve("Hello World");
//         }
//         else{
//             reject('Rejected')
//         }
//     }, 2000); 
// })

// sayHello()

// ===== Task 101 =====

// let getUserData = async () => {
//     try{
//         await fetchUserData().then((data)=>{console.log(data)})
//     }catch(error){
//         console.log(error)
//     };
// }
// let fetchUserData = ()=>{
//     return(new Promise((resolve, reject) => {
//         let obj = {name:"Hassaan"}
//         if(obj.age){
//             resolve(obj);
//         }
//         else{
//             reject('Age is not present in object');
//         }
//     }))
// }

// getUserData();

// ===== Task 102 =====

// let fetchUser = () => {
//     return (new Promise((resolve, reject) => {
//         resolve({ name: "Hassaan", age: 17 })
//     }))
// }

// let fetchPost = () => {
//     return (new Promise((resolve, reject) => {
//         resolve({ post: ["This is a post"], })
//     }))
// }

// let getUserAndPosts = async () => {
//     let users = (await (fetchUser().then(async (data) => {
//         // console.log(data);
//         return data;
//     })))

//     let posts = (await (fetchPost().then(async (data) => {
//         // console.log(data);
//         return data;
//     })))

//     let combine = {...users,...posts};
//     console.log(combine);
// }

// getUserAndPosts()

// ===== Task 103 =====

// let fetchUser = () => {
//     return (new Promise((resolve, reject) => {
//         let obj = {name:"Hassaan"};

//         if(obj.name){
//             resolve(obj);
//         }
//         else{
//             reject("No data found")
//         }
//     }))
// }

// let getUserInfo = async () => {
//     try{
//         let getData = await fetchUser().then((data)=>{
//             console.log(data);
//         })
//     }catch(err){
//         console.log(err);       
//     }
// }

// getUserInfo()

// ===== Task 104 =====

// let apiCall = () => {    
//     return(new Promise((resolve, reject) => {
//         setTimeout(async() => {
//             await  fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then((response) => response.json())
//       .then((json) => resolve(json)).catch(err => reject("Error in loading API"))
//     }, Math.ceil(Math.random()*3000));
//     }))
// }

// let getData = async () => {
//     try {
//         let apis = await apiCall();
//         console.log(apis);
//         let apist = await apiCall();
//         console.log(apist);
//         let apiss = await apiCall();
//         console.log(apiss);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData();