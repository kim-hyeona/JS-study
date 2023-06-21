import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

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