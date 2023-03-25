let 제목 = document.querySelector('#title');

// narrowing 과정

if(제목 != null){ 
    제목.innerHTML = '반가워요'
}

if (제목 instanceof Element){
    제목.innerHTML = '반가워요'
}

/* let 제목 = document.querySelector('#title'); as Element <= 어떤 타입이 들어와도 Element로 간주
    제목.innerHtml = '반가워요'
    권장하는 방식은 아님
 */ 


if (제목?.innerHTML != undefined){
    제목.innerHTML = '반가워요'
}


let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){ //A태그를 narrowing할땐 HTMLAnchorElement
    링크.href = 'https://kakao.com'
}

/* 
button 태그는 HTMLButtonElement
h1 태그는 HTMLHeadingElement
등등...
*/

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click',function(){
    // ?. 버튼에 addEventListener 가능하면 실행하고 아니라면 undefined를 출력
    
})




