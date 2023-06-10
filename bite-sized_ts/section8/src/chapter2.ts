/* 
  keyof 연산자
*/

type Person = typeof person;

function getPropertyKey(person: Person, key:keyof Person){
    return person[key];
}

const person  = {
    name: "김현아",
    age: 25,
};

getPropertyKey(person,"name"); // 김현아
