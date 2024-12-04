const arrays = [
    42,
    true,
    "Hello, World!",
    {
        name: "Hassaan",
        age: 17,
        isStudent:false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];

// ===== Question 1 ====

let q1 = arrays.map((e,i)=>{
    return `${e}`;
})

console.log(q1);

// ==== Question 2 ====

let q2 = arrays.filter((e,i)=>{
    if(typeof(e) === "number"){
        return e;
    }
})

console.log(q2);

// ==== Question 3 ====

let q3 = arrays.forEach((e,i)=>{
    console.log(typeof(e));
});

// ==== Question 4 ====

let q4 = arrays.filter((e,i)=>{
    if (typeof(e) === "number"){
        return e;
    }
})
let q40 = q4.reduce((a,b)=>{
    return a+b;
}) 

console.log(q40);

// ==== Question 5 ====

let q5 = arrays.find((e,i)=>{
    return typeof(e) === "boolean";
})

console.log(q5);

// ==== Question 6 ====

let q6 = arrays.findIndex((e,i)=>{
    return typeof(e) === "object"
})

console.log(q6);

// ==== Question 7 ====

let q7 = arrays.some((e,i)=>{
    return typeof(e) === "number"
})

console.log(q7);

// ==== Question 8 ====

let q8 = arrays.every((e,i)=>{
    return typeof(e) === "string"
})

console.log(q8);