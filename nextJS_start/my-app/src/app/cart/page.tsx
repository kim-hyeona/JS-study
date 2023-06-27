'use client' //client component
import {age, name} from './data'

const Cart = () => { 
  return (
    <div>
      <h4 className='title'>CSart</h4>
      <CartItem/>
    </div>
  );
};

export default Cart;

function CartItem() { //sever component 
  return(
    <div className='cart-item'>
        <p>상품명 {name}</p>
        <p>$40 {age}</p>
        <p>1개</p>
      </div>
  )
}


/* 
sever component: 큰페이지 전체적인 페이지에 적합

html에 자바스크립트 기능 넣기 불가능
useState, useEffect 등도 사용불가

로딩속도 빠름
검색엔진 노출 유리
*/

/* 
client component: js 기능이 필요한 부분에 적합

html에 자바스크립트 기능 넣기 가능!!
useState, useEffect 등도 가능

hydration 과정과 자바스크립트 연산이 많아지기때무에
로딩속도 느려짐

*/