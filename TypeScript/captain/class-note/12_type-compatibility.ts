// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;
developer = new Person();
// developer = person;  //오른쪽에 있는 타입이 더 많은 속성을 갖거나 구조적으로 더 컸을 때 왼쪽과 호환이 된다.


// 함수
var add = function(a: number) {
  return a;
}
var sum = function(a: number, b: number) {
  return a + b;
}
sum = add;
// add = sum; //에러


// 제너릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; //에러
notempty2 = notempty1; //에러