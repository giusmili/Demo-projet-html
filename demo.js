let x = 0;
console.log(x);

let nom = "John";
console.log(nom);

const person = {
  name: "Alice",
  age: 30,
  ville: "Paris",
};

console.info(typeof person);

console.log(Object.keys(person));
console.log(Object.values(person));
let keys;

for (keys in person) {
  console.log(keys + " : " + person[keys]);
}
let date = new Date().getFullYear();
console.log(date);

/* ============================== */

const teams = [
  {
    name: "Alice",
  },
  {
    name: "Bob",
  },
];
console.log(teams);

/* for (const team of teams) {
    console.log(team.name);
} */
teams.forEach((team) => {
  console.log("Nom : " + team.name);
});
