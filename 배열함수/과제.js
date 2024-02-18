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
const Upnames = names.map((item) => {
  return item.toUpperCase();
});
const Firstnames = names.map((item) => {
  const name = item.split(" ");
  return name[0];
});
const Initlalname = names.map((item) => {
  const name = item.split(" ");
  const Innames = name.map((item2) => item2.charAt(0));
  return Innames.join("");
});
console.log(Upnames);
console.log(Firstnames);
console.log(Initlalname);
