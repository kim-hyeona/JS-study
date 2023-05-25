// Array 중복 아이템 삭제

const nums = [1,2,3,6,6,7,2,2,8,9]

/* 1.Set() 중복요소를 제외하고 필터링 es6 문법 중복허용 x
const uniqueNums = [...new Set(nums) ]
console.log(uniqueNums); // 1,2,3,6,7,8,9
 */

/* 2. indexOf() arry 요소를 전달해주면 그에 상응하는 첫번째 인덱스를 리턴해준다
 const uniqueNums = nums.filter((item, position) => {
    return nums.indexOf(item) === position;
 });

 console.log(uniqueNums); */

//  3.caching / frequency map loop를 통해 미리 지정된 caching object에 존재 여부 확인

function uniqueNums(arr) {
    const uniqueElements = {}
    const result = []
    for (let element of arr) {
        if(!uniqueElements[element]){
            result.push(element)
        }
        uniqueElements[element] = element
    }
    return result;
}

console.log(uniqueNums(nums))