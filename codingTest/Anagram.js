// 애너그램 판별하기
// 두 단어의 글자 나열 순서는 다르지만 구성이 일치할시 -> 애너그램

const stringA = 'listen';
const stringB = 'silent';

// #1 함수 split(), sort(), join()
function isAnagram(strA , strB) {
    if(strA.length !== strB.length){
        return false
    }
    return strA.split("").sort().join() === strB.split("").sort().join()
}

console.log(isAnagram(stringA,stringB))



// #2 map = {}

function isAnagram(strA,strB) {
    if(strA.length !== strB.length){
        return false;
    }
    const hashMap = {}
    for (const char of strA){
        // {1:1,i:1,s:1}
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }
    for(const char of strB){
        if(!hashMap[char]){
            return false;
        }
        hashMap[char]--;
    }
    return true;

}



const foo = (c) => {
    let t = 0
    for(let i=0; i<=c; i++){
        t += i
    }
    console.log(t)
};

