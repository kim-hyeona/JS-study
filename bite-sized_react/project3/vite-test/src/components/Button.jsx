import React from 'react';
import "./button.css"
/* 
공통 컴포넌트
*/
const Button = ({ text, type, onClick }) => {
  const btnType = ["positive","negative"].includes(type) ? type : "default";
  /*  요소가 positive, negative인 배열에서 전달 type에 이 요소가 있는지 includes메서드로 확인
    전달 type이 positive또는 negative라면 해당 값을 그대로 변수 btnType에 저장  */
  return (
    <button className={["Button",`Button_${btnType}`].join(" ")} 
    /* className을 복수로 지정하기 위해 배열과 join메서드 이용
      className을 두개로 지정하는 이유는 positive, negative, default 처럼
      type을 결정하는 내용에 따라 스타일을 변경하기 위함
      
      템플릿 리터럴을 이용해 변수 btnType에 저장한 값을 className으로 추가
      따라서 Props(type)가 positive라면 변수 btnType은 Botton_positive가 되고
      전체 className은 Button,Button_positive 가 된다
    */
         onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = { // 아무런 type도 props로 전달하지 않을 때를 대비해 defaultProps를 지정
  type:"default",       // type을 지정하지 않으면 Props에는 dafault가 기본값으로 설정
}

export default Button;