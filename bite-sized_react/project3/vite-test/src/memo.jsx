// 페이지 라우팅이란
/* 
  페이지 라우팅은 요청에 따라 적절한 페이지를 반환하는 일련의 과정이다
  예를 들어 도메인 주소가 winterlood.com인 웹 서비스에서 winterlood.com/blog 또는
  winterlood.com/books와 같은 URL로 페이지를 요청하는 모습을 떠올리면 쉽게 이해할 수 있다

  이때 요청 url에서 도메인 주소 winterlood.com/ 뒤에 붙는 books나 blog는
  경로(path)라고 한다. 결국 페이지 라우팅은 'url 요청 경로에 맞게 적절한 페이지를 보여주는 과정이다'
*/


// 리액트의 페이지 라우팅
/* 
  페이지 라우팅의 구현은 웹 페이지를 어디서 만드느냐에 따라
  서버사이드 렌더링 / 클라이언트 사이드 렌더링 두 가지로 구분한다
  리액트는 이 두 방법 중 브라우저에서 페이지를 만드는 '클라이언트 사이드 렌더링'방식을 채택한다
*/


// 서버 사이드 렌더링
/* 
  서버 사이드 렌더링 과정
  1. 웹 브라우저에서 url로 서비스 요청
  2. 웹 서버는 요청 url에서 경로를 확인하고 경로에 맞는 html을 생성에 반환
  3. 웹 브라우저는 웹 서버가 반환한 html를 보여준다

  사용자가 버튼 또는 링크를 클릭해 페이지를 이동할 때는 다음과 같이 동작
  1. 웹 브라우저에서 url.com/path 로 서비스를 요청
  2. 웹 서버는 요청 URL로 경로를 확인하고 해당 경로의 html 생성해서 반환
  3. 웹 브라우저는 웹 서버가 반환한 html를 보여주고 페이지가 교체되기 때문에
  브라우저가 깜박이면서 새로고침이 발생함

  이런식의 페이지 라우팅을 서버사이드렌더링이라고하며
  이 방식은 웹 브라우저에 표시할 페이지를 웹 서버에서 만들어서 전달한다

  서버 사이드 렌더링은 검색 엔진을 최적화하며
  처음 접속할때 속도가 빠르다는 장점이 있다

  단점으로는 사용자가 페이지를 이동할때마다 서버가 새로운 페이지를 생성하고 제공하려면
  많은 연산을 수행하게 되고 따라서 수 많은 요청이 동시에 이루어지는 서비스라면 서버에
  부하가 걸릴 위험성이 높다. 그리고 페이지를 이동 할때마다 브라우저는 서버가 제공하는
  페이지를 기다려야하기 때문에 속도가 느려진다
*/


// 클라이언트 사이드 렌더링
/* 
  리액트 앱은 html 파일이 하나뿐인 단일 페이지 어플리케이션이다

  html파일이 단 하나이기 때문에 서버 사이드가 아닌 클라이언트 사이드렌더링으로 페이지가 렌더링된다
  클라이언트 사이드 렌더링에서는 페이지를 브라우저가 직접 만든다

  클라이언트 사이드 렌더링 동작과정
  1. 웹 브라우저가 url로 서비스를 요청한다
  2. 웹 서버는 요청 url의 경로를 따지지 않고 페이지의 틀 역할을 하는
  index.html과 자바스크립트 애플리케이션인 리액트를 함께 반환한다
  3. 웹 브라우저는 서버에서 제공된 index.html 페이지를 보여주고 자바스크립트로 이루어진 리액트 앱 실행
  그리고 리액트 앱은 현재 경로에 맞는 페이지를 보여줌
  4. 사용자가 페이지를 이동하면 웹 브라우저는 서버에서 받은 리액트앱을 실행해 자체적으로 페이지를 교체
*/



// 리액트 라우터로 페이지 라우팅하기
/* 
  클라이언트 사이드 렌더링을 채택하고 있는 리액트 앱에서 페이지 라우팅을 구현

  
  리액트 라우터란?
  
  리액트 라우터는 Remix 팀에서 제작한 오픈소스 라이브러리이다
  터미널에 npm i react-router-dom 명령어를 입력해 리액트 라우터를 설치한다
  react-router-dom을 설치하는 이유는 리액트 라우터 개발팀이 react-router를 핵심 코드로 하여
  웹용(react-router-dom)과 모바일 앱용(react-router-native)를 함께 릴리스하기 때문이다
*/


// 리액트 라우터로 동적 경로 라우팅하기
/* 
  동적 경로란 특정 아이템을 나타내는 id값처럼 값이 변하는 요소를 URL에 포함하는 경우를 말한다
  예를 들어 [감정 일기장]프로젝트에서 일기 아이템의 id가 3인 상세 페이지의 url을
  /diary/3 또는 /diary?id=3/ 과 같은 동적 경로 형식으로 표기할 수 있다

  동적경로는 흔히 쇼핑몰의 일부 상품 페이지에서 특정 데이터를 조회하는 주소 표현으로 사용된다
*/


// 동적 경로의 종류
/* 
  동적 경로를 표현하는 방법에는 URL 파라미터와 쿼리 스트링 두가지가 있다
  실무에서 두 방법 모두 잘 사용된다
*/

// URL파라미터
/* 
  URL 파라미터는 URL에 유동적인 값을 넣는 방법이다 보통 유동적인 값은 중괄호로 표기한다
  이 방법은 특정 id를 포함한 상세 페이지의 URL은 다음과 같이 표기한다

  https://localhost:3000/diary/{id}

  예를 들아 id가 3일 경우
  https://localhost:3000/diary/3


  URL파라미터 방식은 주로 id나 이름을 이용해 특정 데이터를 조회할때 사용한다
*/


// 쿼리스트링
/* 
  쿼리스트링은 물음표(?) 뒤에 key=value 문법으로 URL에 유동적인 값을 포함하는 방법이다
  https://localhost:3000?sort=latest

  만약 URL에 유동적인 값을 두 개 이상 포함해야 한다면 &로 구분
  https://localhost:3000?sort=latest&page=1

  쿼리스트링 방식은 보통 게시물 리스트에서 사용자가 정렬 조건을 선택하거나 현재 조회하는
  게시판의 페이지를 표현할때 사용한다
*/
