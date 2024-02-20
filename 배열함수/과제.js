let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];
// map 문제
// 1. 모든 이름을 대문자를 바구어서 출력
const Upnames = names.map((item) => {
  return item.toUpperCase();
});
//2. 성을 제외한 이름만 출력
console.log(Upnames);
const Firstnames = names.map((item) => {
  const name = item.split(" ");
  return name[0];
});
console.log(Firstnames);
//3.이름의 이니셜만 출력
const Initlalname = names.map((item) => {
  const name = item.split(" ");
  const Innames = name.map((item2) => item2.charAt(0));
  return Innames.join("");
});
console.log(Initlalname);
// Filter 문제
// 1. 이름에 'a'를 포함한 사람들을 출력
const namesWithA = names.filter((item) => item.toLowerCase().includes("a"));
console.log(namesWithA);

// 2. 이름에 같은 글자가 연속해서 들어간 사람 출력
const namesWithRepeatedLetters = names.filter((item) =>
  /(.)\1/.test(item.toLowerCase())
);
console.log(namesWithRepeatedLetters);

// Some 문제
// 1. 전체 이름의 길이가 20자 이상인 사람이 있는가?
const hasNameLength20Plus = names.some((item) => item.length >= 20);
console.log(hasNameLength20Plus);

// 2. 성을 제외한 이름에 'p'를 포함한 사람이 있는가?
const hasPInFirstName = names.some((item) =>
  item.split(" ")[0].toLowerCase().includes("p")
);
console.log(hasPInFirstName);

// Every 문제
// 1. 모두의 전체 이름의 길이가 20자 이상인가?
const allNamesLength20Plus = names.every((item) => item.length >= 20);
console.log(allNamesLength20Plus);

// 2. 모두의 이름에 'a'가 포함되어 있는가?
const allNamesContainA = names.every((item) =>
  item.toLowerCase().includes("a")
);
console.log(allNamesContainA);

// Find 문제
// 1. 전체 이름의 길이가 20자 이상인 사람을 찾기
const nameLength20Plus = names.find((item) => item.length >= 20);
console.log(nameLength20Plus);

// 2. 미들네임이 포함되어 있는 사람 찾기
const hasMiddleName = names.find((item) => item.split(" ").length === 3);
console.log(hasMiddleName);

// FindIndex 문제
// 1. 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호 찾기
const indexNameLength20Plus = names.findIndex((item) => item.length >= 20);
console.log(indexNameLength20Plus);

// 2. 미들네임이 포함되어 있는 사람의 인덱스 번호 찾기
const indexHasMiddleName = names.findIndex(
  (item) => item.split(" ").length === 3
);
console.log(indexHasMiddleName);
