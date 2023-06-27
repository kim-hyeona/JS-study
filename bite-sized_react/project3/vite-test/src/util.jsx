import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getElementById = (emotionId) => { // 함수 getElementById의 매개변수 emotionId에는 페이지나 컴포넌트에서 전달된 감정 이미지 번호가 저장됨
  const targetEmotionId = String(emotionId); // emotionId가 문자열이 아닌 숫자로 제공될 수 있기 때문에 String 메서드를 이용해 명시적으로 형변환
  switch(targetEmotionId){// switch문으로 번호와 일치하는 이미지를 찾아서 반환
    case "1":
      return emotion1
    case "2":
      return emotion2
    case "3":
      return emotion3
    case "4":
      return emotion4
    case "5":
      return emotion5
  }
}

/* 
  프로젝트를 진행하다보면 함수 getElementById처럼 핵심기능은 아니지만
  여러 컴포넌트에서 공통으로 사용할 기능이 나온다. 이런 기능을
  util.js 같은 별도의 파일에 넣어두고 필요할때마다 불러다 쓰면 중복코드를 피할 수 있다. 
*/


export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10){
    month = `0${month}`
  }
  if (date < 10) {
    date = `0${date}`
  }
  return `${year}-${month}-${date}`
}


export const eomtionList = [
  {
    id: 1,
    name: "완전 좋음",
    img: getElementById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getElementById(2)
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getElementById(3)
  },
  {
    id: 4,
    name: "나쁨",
    img: getElementById(4)
  },
  {
    id: 5,
    name: "끔찍함",
    img: getElementById(5)
  }
]



export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(),1).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    29,
    59
  ).getTime();
  return { beginTimeStamp,endTimeStamp };
}