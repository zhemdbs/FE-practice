// function logText(text) {
//   console.log(text);
//   return Text;
// }

// logText(10); //10
// logText('hi'); //'hi
// logText(true); //true


// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>('hi'); 



// function logText(text: string) {
//   console.log(text);
//   return Text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('a');
// logText(100);
// logNumber(100);


// function logText(text: string | number) {
//   console.log(text);
//   return Text;
// }
// const a = logText('a');
// logText(100);


function logText<T>(text: T):T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);


//인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected:false } //에러
// const obj2: Dropdown = { value: 'abc', selected:false }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value:'abc', selected: false } 

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach((text)=>{
//     console.log(text);
//   })
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('a');
logTextLength(10); //에러 

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10); //에러
// getShoppingItemOption<string>('a'); //에러
getShoppingItemOption('name');