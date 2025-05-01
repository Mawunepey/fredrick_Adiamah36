// how to add 5 marks to grades

let scores = [85,92,78,95,88]
scores.map((eachscore)=>{
    console.log(eachscore + 5)
});

// for loop
for(let i = 0; i < scores.length; i++){
    console.log(scores[i] + 5)
}


// let scores = [85,92,78,95,88]
let newscores = []
scores.map(eachscore=>{
    newscores.push(eachscore + 5);

});


console.log(newscores)
let passed = newscores.filter(score => ( score >= 90));
console.log(passed)



// lab 2
let student = {name:"Fred", age:30, grade:"A", subjects:["Maths","scince"]}
const {name, grade} = student;
console.log(name,grade);

// adding new profile to fred
let profile = {...student,school:"tech high"}
console.log(profile);