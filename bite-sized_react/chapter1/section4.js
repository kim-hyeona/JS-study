// 조건문
/* 
  조건문이란 특정 조건을 만족할때 원하는 동작을 수행하게 하는 프로그래밍 기본 문법 중 하나이다
  조건문에는 if문과 switch/case 문이 있다
*/


// if문
/* 
  if문은 영어로 만약이라는 뜻으로 
  if문은 만약 A라면 B를 하고 그렇지 않으면 C를 하라와 같은 조건에 따라
  각기 명령을 수행하도록 만들때 사용한다.

  if(조건식){
    조건식이 참일때 수행할 명령
  }else{
    조건식이 거짓일때 수행하는 명령
  }
*/

let ifVar = 11;

if(num >= 10) {
  console.log('num은 10 이상입니다');
  console.log('조건식은 참입니다');
}

if(num >= 10) {
  console.log('num은 10 이상입니다');
}else{
  console.log('조건 불일치');
}

// 참과 거짓 말고도 또 다른 조건을 추가

let ifVar2 = 5;

if(num >= 10) {
  console.log('num보다 10 이상입니다');
} else if(num >= 5){
  console.log('num은 5 이상입니다');
}else {
  console.log('num은 5미만입니다');
}

/* 
  if 문의 조건식이 거짓이면 else if문의 조건식을 수행합니다.
  중첩 else if문을 이용해 코드에 따라 해당 국가의 이름을 출력하는 예시
*/

let country = "ko";

if(country === "ko") {
  console.log('한국');
} else if(country === "us") {
  console.log('미국');
} else if (country === "dk"){
  console.log('덴마크');
} else {
  console.log('미분류');
}


// swich 문
/* 
  switch 문은 중첩 if 문처럼 비교할 조건이 많을때 사용하는 조건문이다
  식이나 값을 case문과 비교해 정확히 일치할때만 실행된다
*/

let fruit = "apple";

switch(fruit){ //소괄호에 있는 변수의 값을 기준으로 이 값이 어떤 case에 해당하는지 판단
  case "apple" :{
    console.log('사과'); // case가 apple이면 사과출력
    break; //  case문에서 명령을 수행한 다음 break문을 만나면 switch문 종료 
  }
  case "banana" :{
    console.log('바나나');
    break;
  }
  default: { // default문은 생략해도 오류가 발생하지 않습니다.
    console.log('우리가 찾는 과일이 아니네요'); 
  }
}

/* 
  조건의 개수는 많으나 조건별로 수행할 식이 짧으면 switch문을
  조건별로 수행할 식이 길거나 복잡하다면 if문을 사용
*/