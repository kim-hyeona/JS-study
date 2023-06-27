

export default function Home() {
  let name:string = "현아";
  let link:string = "http://google.com"

  return (
    <div>
      <h4 className="title">후팡 쿠레시</h4>
      <p className="title-sub">개발자 김{name}</p>{/* 데이터 바인딩 문법 */}
      {/* <a href={link} target="_blank" rel="noopener noreferrer">링크</a> */}
    </div>
  )
}

/* 
  Next에서 라우팅 방법
  1. app 폴더 안에 폴더를 만들고 이름을 짓는다(이게 경로가 됨)
  2. 그 안에 page.js를 넣고
  3. 그 안에 레이아웃을 작성한다
*/