//맵드 타입 기반의 유틸리티 타입들2


/* 
  Pick<T, K>
  -> 뽑다, 고르다
  -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
*/

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbanilURL?: string;
};

type Pick<T, K extends keyof T> = { // K extends "title" | "tags" | "content" | "thumbanilURL"
  // "title" | "content" extends "title" | "tags" | "content" | "thumbanilURL"
  [key in K] : T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};



/* 
  Omit<T, K>
  -> 생략하다, 빼다
  -> 객체타입으로부터 특정 프로퍼티를 제거하는 타입
*/

type Omit<T, K extends keyof T> = Pick<T,Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbanilURL', 'title'>>
// 결과 Pick<Post, "content" | "tags" | "thumbanilURL" >

const noTitlePost: Omit<Post, "title"> = {
  content:"",
  tags: [],
  thumbanilURL:"",
};




/* 
  Record<k, v>
*/

type ThumbanilLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  smaill: {
    url: string;
  };
  watch: {
    url: string;
  }
};

type Record<K extends keyof any, V> = {
  [key in K]: V
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch",
{url: string , size: number}>;