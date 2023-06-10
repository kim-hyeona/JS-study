/* 
  인덱스드 엑세스 타입
*/

import { type } from "os";

// 객체

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = 'author';

function printAuthorInfo(author: PostList[number]['author']){ //['author'] 인덱스를 이용해서 특정 프로퍼티에 접근한다고 해서 인덱스드 엑세스 타입이라고 부른다
    console.log(`${author.name}-${author.id}`);   
}

const post: PostList[0] = {
    title:"게시글 제목",
    content:"게시글 본문",
    author:{
      id:1,
      name:"김현아",
      age:25,
    },
}

printAuthorInfo(post.author);



// 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];