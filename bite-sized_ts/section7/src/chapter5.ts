/* 
  promise
  프로미스의 타입정의
*/

import { resolve } from "path";

/* 
프로미스는 제네릭 클래스를 기반으로 타입이 선언되어있기때문에
비동기처리의 결과값을 타입으로 정의해줄 수 있지만
반대로 reject 실패했을때 타입은 정할 수 없다
결과값을 타입으로 정해주지 않으면 unkwon타입으로 정의된다
 */
const promise = new Promise<number>((resolve,reject)=>{
    setTimeout(()=>{
        // resolve(20);
        reject("실패~")
    },3000);
});

promise.then((response)=>{
  console.log(response * 10); //20
});

promise.catch((err)=>{
    if(typeof err === "string"){
      console.log(err);
    }
})



/* 
  프로미스를 반환하는 함수의 타입을 정의
*/

interface Post{
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post>{
    return new Promise((resolve , reject)=>{
      setTimeout(() => {
        resolve({
          id: 1,
          title:"게시글 제목",
          content:"게시글 컨텐츠"
        })
      },3000)
    })
}

const postRequest = fetchPost();

postRequest.then((post)=>{
  post.id
});