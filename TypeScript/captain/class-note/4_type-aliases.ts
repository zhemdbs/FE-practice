interface People {
  name:  string;
  age: number;
}

// type People = {
//   name:  string;
//   age: number;
// }

var tomato: People = {
  name: 'Tomato',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo) {}