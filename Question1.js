/*A junior developer structure student name, skills and score in array of arrays which may not easy to read.
 Destruction the following array name to name, skills array to skills, 
 scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, scores)
  console.log(jsScore, reactScore)
*/

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const Destruction = (student) => {
  let name, skills, scores, jsScore, reactScore;
  student.map((element, index) => {
    if (index == 0) {
      name = element;
    }
    if (index == 1) {
      skills = element;
    }
    if (index == 2) {
      scores = element;
    }
  });
  skills.map((s, i) => {
    if (s == "JS") {
      jsScore = scores[i];
    }
    if (s == "React") {
      reactScore = scores[i];
    }
  });

  console.log(` Nmae: ${name}, Skills : ${skills}, Scores ${scores}`);
  console.log(`JsScore : ${jsScore} ReactScore : ${reactScore}`);
};

// Destruction(student);

//////////////////////////////  1.B   //////////////////////////////

//  Write a function called convertArrayToObject which can convert the array to a structured object.

// 	const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]

// console.log(convertArrayToObject(students))
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

convertArrayToObject = (students) => {
  let obj_set = [];

  for (let value of students) {
    obj_set.push(
      Object.assign({ name: value[0], skills: value[1], scores: value[2] })
    );
  }
  return obj_set;
};
// console.log(convertArrayToObject(students));

//////////////////////////////  1.C   //////////////////////////////

/*	Copy the student object to newStudent without mutating the original object. In the new object add the following ?
	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets
	```js
  */
const student3 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const copyObjectWithoutMutaingUpdate = (skillType, skill) => {
  const newObject = { ...student3 };

  for (let key in newObject.skills) {
    if ([key] == skillType) {
      // like fontend, backend, database

      newObject.skills[key].push(skill);
    }

    // console.log(key, newObject[key]);
  }
  console.log(newObject.skills);
  // console.log(student3.age);
};

copyObjectWithoutMutaingUpdate("frontEnd", { skill: "Bootstrap", level: 8 });
copyObjectWithoutMutaingUpdate("backEnd", { skill: "Express", level: 9 });
copyObjectWithoutMutaingUpdate("dataBase", { skill: "SQL", level: 9 });
copyObjectWithoutMutaingUpdate("dataScience", "SQL");