//타입 저장(변수처럼 : type alias)
type myType = string | number | undefined
let myVar : myType = 'str'
myVar = 23.3

//객체 타입
type 동물 = {age: number, kind: string}

//객체 속성 추가 => & 
type 강아지 = 동물 & {barking: string}  

let 멍멍이 : 강아지 = {age: 4, kind: '개', barking: '왈왈'}

