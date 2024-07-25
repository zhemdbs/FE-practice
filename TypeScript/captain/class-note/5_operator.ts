// function logMessage(value: any) {
//   console.log(value)
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

var yoon: string | number | boolean;
function logMessage(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString();
  }

  if(typeof value === 'string') {
    value.toString();
  }
}

logMessage('hello');
logMessage(100);


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   // someone.name
//   // someone.skill
//   // someone.age
// }

// askSomeone({ name: 'lee', skill: 'html'})
// askSomeone({ name: 'ji', age: 30 })
// askSomeone({ name: 'yoon', skill: 'js', age: 35 })


function askSomeone(someone: Developer & Person) {
  someone.name
  someone.skill
  someone.age
}
  
// askSomeone({ name: 'lee', skill: 'html'})
// askSomeone({ name: 'ji', age: 30 })
askSomeone({ name: 'yoon', skill: 'js', age: 35 })

// var yoon: string | number | boolean;
// var zoon: string & number & boolean;