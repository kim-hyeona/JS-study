/* 
  인터페이스 확장
*/

interface Animal {
  name: string;
  color: string;
};

interface Dog extends Animal{ //객체타입이면 다 확장할 수 있다!!
  // name:"hello" //이런식으로 해당하는 타입의 리터럴타입으로 다시 지정할 수 있다
  isBark: boolean;
}

const dog: Dog = {
  name:"",
  color:"",
  isBark: true
}

interface Cat extends Animal{
  isScratch: boolean;
}

interface Chicken extends Animal{
  isFly: boolean;
}


/* 
  다중확장
*/

interface DogCat extends Dog, Cat {

}

const dogcat: DogCat = {
  name: "",
  color:"",
  isBark:true,
  isScratch:true,
};
