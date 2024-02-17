// 객체에다가 같은이름으로 요소를 넣을때 name:name하지않고 name으로 그냥 넣을수있음.
// let name = "junhyeok's fruit store";
// let fruit = ["banana", "apple", "mango"];
// let address = "Seoul";
// let store = { name, fruit, address };
// console.log(store);
//문제 2 - 백틱사용
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address} 에 있습니다.`);

//문제 3 - 구조분해할당
function calculate(obj) {
  const { a, b, c } = obj;
  return a + b + c;
}

const sum = calculate({ a: 1, b: 2, c: 3 });
console.log(sum);
//문제 4 - 정답이 true가 나오게 하기
let name = "noona store";
let fruit = ["banana", "apple", "mango"];
let address = {
  country: "Korea",
  city: "Seoul",
};
function findStore(obj) {
  const { name, fruit, address } = obj;
  const { country, city } = address;
  return name == "noona store" && city == "Seoul";
}
console.log(findStore({ name, fruit, address }));
//문제 5 - 다음과 같이 프린트되게 코드를 바꿔라
function getNumber() {
  let arr = [1, 2, 3, 4, 5, 6];
  const first = arr[0];
  const third = arr[2];
  const forth = arr[3];
  return { first, third, forth };
}
console.log(getNumber()); //결과값 {first : 1, third:3,forth:4}
//문제 6- true되게 해라
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
const rest = ["Febuary", "March"];
const first = "January";
console.log(getCalendar(first, ...rest));

//문제 7 - 두 어레이 들중 최소값을 찾는 함수
function getMinnum() {
  let a = [45, 24, 78];
  let b = [54, 11, 9];
  let ab = a.concat(b);

  return Math.min(...ab);
}
console.log(getMinnum());
//문제 8 - 화살표 함수로 바꾸기
const sumNumber = () => {
  const sum = (a, b) => a + b;

  return sum(40, 10);
};
console.log(sumNumber());
//화살표함수로 바꾸기
const sumNum = () => {
  const addNum = (a) => (b) => (c) => a + b + c;
  return addNum(1)(2)(3);
};
console.log(sumNum());
